using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MessageBoardBackend.Models
{
    public class Message
    {
        [Key]
        public string Id { get; set; }

        public string Owner { get; set; }

        public string Text { get; set; }
    }
}
