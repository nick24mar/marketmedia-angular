using System;
using System.ComponentModel.DataAnnotations;

namespace marketmedia.Models
{
    public class Item
    {
        public int Id { get; set; }

        [Required]
        [StringLength(255)]
        public string Name { get; set; }

        public double Price { get; set; }

        public DateTime DatePosted { get; set; }
    }
}
