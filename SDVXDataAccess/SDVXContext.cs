using Microsoft.EntityFrameworkCore;
using SDVXCore.Types.Models;

namespace SDVXDataAccess
{
    public class SDVXContext : DbContext
    {
        public SDVXContext(DbContextOptions options) : base(options) { }

        public DbSet<Song> Songs { get; set; }
        public DbSet<Chart> Charts { get; set; }
    }
}
