using System.ComponentModel.DataAnnotations.Schema;

namespace marketmedia.Models
{
    [Table("Categories")]
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
