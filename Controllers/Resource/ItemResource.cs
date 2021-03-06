using System;
using System.ComponentModel.DataAnnotations;

namespace marketmedia.Controllers.Resource
{
    public class ItemResource
    {
        public int Id { get; set; }

        [Required]
        [StringLength(255)]
        public string Name { get; set; }

        public double Price { get; set; }

        public DateTime DatePosted { get; set; }

        public string Category { get; set; }

    }
}
