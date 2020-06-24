using Microsoft.EntityFrameworkCore;
using SDVXDataAccess;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class Configuration
    {
        public static IServiceCollection AddDataAccessHandlers(this IServiceCollection services, string connectionString)
        {
            services.AddScoped<SDVXContext>();
            services.AddDbContext<SDVXContext>(options => options.UseSqlServer(connectionString));
            return services;
        }
    }
}
