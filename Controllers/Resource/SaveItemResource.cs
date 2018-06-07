using System;
using System.ComponentModel.DataAnnotations;

namespace marketmedia.Controllers.Resource
{
    public class SaveItemResource
    {
        public int Id { get; set; }

        [Required]
        [StringLength(255)]
        public string Name { get; set; }

        public double Price { get; set; }

        public DateTime DatePosted { get; set; }

        public int CategoryId { get; set; }

    }
}
