using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using MessageBoardBackend.Data;
using MessageBoardBackend.Models;
using MessageBoardBackend.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace MessageBoardBackend.Controllers
{
    [Route("auth")]
    public class AuthController : Controller
    {
        private readonly ApiContext _context;

        public AuthController(ApiContext context)
        {
            _context = context;
        }

        // POST api/<controller>
        [HttpPost("login")]
        public ActionResult Login([FromBody] Credential credential)
        {
            var user = _context.Users.SingleOrDefault(u => u.Email == credential.email && u.Password == credential.password);

            if (user==null)
            {
                return NotFound("Incorrect email or password");
            }

            return Ok(CreateJwtPacket(user));
        }

        // POST api/<controller>
        [HttpPost("register")]
        public ActionResult Register([FromBody] User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();

            return Ok(CreateJwtPacket(user));
        }


        private JwtPacket CreateJwtPacket(User user)
        {
            var signingKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("My Secret Phrase"));
            var signingCredentials = new SigningCredentials(signingKey,SecurityAlgorithms.HmacSha256);

            var claims = new Claim[]
            {
                new Claim(JwtRegisteredClaimNames.Sub,user.Id) 
            };

            var jwt = new JwtSecurityToken(claims : claims,signingCredentials: signingCredentials);

            var encodedToken = new JwtSecurityTokenHandler().WriteToken(jwt);
            return new JwtPacket() { Token = encodedToken, FirstName = user.FirstName };
        }

    }
}
