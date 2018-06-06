using Microsoft.EntityFrameworkCore;

namespace marketmedia.Persistence
{
    public class MarketMediaDbContext : DbContext
    {
        public MarketMediaDbContext(DbContextOptions<DbContext> options)
          : base(options) { }
    }
}
