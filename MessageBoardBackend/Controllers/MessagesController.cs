using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MessageBoardBackend.Data;
using Microsoft.AspNetCore.Mvc;
using MessageBoardBackend.Models;


namespace MessageBoardBackend.Controllers
{
    [Route("api/[controller]")]
    public class MessagesController : Controller
    {

        private readonly ApiContext _apiContext;

        public MessagesController(ApiContext context)
        {
            _apiContext = context;
        }
        // GET: /<controller>/
        [HttpGet]
        public ActionResult GetMessages()
        {
            return Ok(_apiContext.Messages);
        }

        [HttpGet("{startIndex}/{count}")]
        public ActionResult GetMessages(string startIndex, string count)
        {
            try
            {
                int startingIndex = Int32.Parse(startIndex);
                int recordCount = Int32.Parse(count);

                return Ok(_apiContext.Messages.Skip(startingIndex).Take(recordCount));
            }
            catch (Exception e)
            {
                return BadRequest("Unable to get messages. " + e.Message);
            }
            
        }

        [HttpGet("{name}")]
        public IEnumerable<Message> GetMessages(string name)
        {
            return _apiContext.Messages.Where(message => message.Owner == name);
        }

        [HttpPost]
        public Message Post([FromBody] Message message)
        {

            if (message != null)
            {
                var result = _apiContext.Messages.Add(message).Entity;
                _apiContext.SaveChanges();
                return result;
            }
            else
            {
                return null;
            }
           
        }

        [HttpDelete]
        public ActionResult DeleteAll()
        {
            try
            {
                _apiContext.Messages.RemoveRange(_apiContext.Messages);
                _apiContext.SaveChanges();
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest("Unable to delete all messages. " + e.Message);
            }
        }
    }
}
