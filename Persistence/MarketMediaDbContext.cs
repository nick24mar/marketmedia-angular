using marketmedia.Models;
using Microsoft.EntityFrameworkCore;

namespace marketmedia.Persistence
{
    public class MarketMediaDbContext : DbContext
    {
        public DbSet<Item> Items { get; set; }
        public DbSet<Category> Categories { get; set; }

        public MarketMediaDbContext(DbContextOptions<MarketMediaDbContext> options)
          : base(options) { }
    }
}
