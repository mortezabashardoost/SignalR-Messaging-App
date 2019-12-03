using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MessageBoardBackend.Data;
using MessageBoardBackend.Hub;
using MessageBoardBackend.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace MessageBoardBackend
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddDbContext<ApiContext>(opt => opt.UseInMemoryDatabase("MessageBoard"));

            services.AddCors(options => options.AddPolicy("Cors", builder =>
                {
                    builder
                        .AllowAnyHeader()
                        .AllowAnyMethod()
                        .AllowAnyOrigin().AllowCredentials().WithMethods("GET","POST","PUT", "OPTIONS");
                }));

            var signingKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("My Secret Phrase"));

            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(cfg =>
            {
                cfg.RequireHttpsMetadata = false;
                cfg.SaveToken = true;
                cfg.TokenValidationParameters = new TokenValidationParameters()
                {
                    IssuerSigningKey = signingKey,
                    ValidateAudience = false,
                    ValidateIssuer = false,
                    ValidateLifetime = false,
                    ValidateIssuerSigningKey = true
                };
            });

            services.AddSignalR();
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseAuthentication();
            app.UseCors("Cors");
            app.UseMvc();
            app.UseSignalR(s => s.MapHub<EchoHub>("/echo"));
            // Seed the database.
            //using (var serviceScope = app.ApplicationServices.CreateScope())
            //{
            //    SeedData(serviceScope.ServiceProvider.GetService<ApiContext>());
            //}


        }

        public void SeedData(ApiContext context)
        {
            context.Messages.Add(new Message() { Owner = "Matilda", Text = "Hi guys" });
            context.Messages.Add(new Message() { Owner = "Allen", Text = "Hi bro" });

            context.SaveChanges();
        }
    }
}
