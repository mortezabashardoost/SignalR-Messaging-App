using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MessageBoardBackend.Data;
using MessageBoardBackend.Models;
using MessageBoardBackend.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MessageBoardBackend.Controllers
{
    [Produces("application/json")]
    [Route("api/Users")]
    public class UsersController : Controller
    {
        private readonly ApiContext _context;

        public UsersController(ApiContext context)
        {
            _context = context;
        }

        [HttpGet("{id}")]
        public ActionResult GetUser(string id)
        {
            try
            {
                var user = _context.Users.SingleOrDefault(u => u.Id == id);

                if (user == null)
                {
                    return NotFound("User not found");
                }

                return Ok(user);
            }
            catch (Exception e)
            {
                return BadRequest("Unable to get user. " + e.Message);
            }
        }

        [Authorize]
        [HttpGet("me")]
        public ActionResult Get()
        {
            return Ok(GetSecureUser());
        }

        [Authorize]
        [HttpPost("me")]
        public ActionResult Post([FromBody] EditProfileData editProfileData)
        {
            try
            {
                var user = GetSecureUser();
                user.FirstName = editProfileData.FirstName ?? user.FirstName;
                user.LastName = editProfileData.LastName ?? user.LastName;

                _context.SaveChanges();

                return Ok(user);
            }
            catch (Exception e)
            {
                return BadRequest("Unable to save user data. "+ e.Message);
            }
        }

        [HttpDelete]
        public ActionResult DeleteAll()
        {
            try
            {
                _context.Users.RemoveRange(_context.Users);
                _context.SaveChanges();
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest("Unable to delete all users. " + e.Message);
            }
        }

        private User GetSecureUser()
        {
            var id = HttpContext.User.Claims.First().Value;
            return _context.Users.SingleOrDefault(u => u.Id == id);
        }
    }
}