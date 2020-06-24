using Microsoft.EntityFrameworkCore;
using SDVXCore.Interfaces.Handlers;
using SDVXDataAccess;
using SDVXDataAccess.Infrastructure;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class Configuration
    {
        public static IServiceCollection AddDataAccessHandlers(this IServiceCollection services, string connectionString)
        {
            services.AddScoped<SDVXContext>();
            services.AddDbContext<SDVXContext>(options => options.UseSqlServer(connectionString));

            services.AddTransient<ISongHandler, SongHandler>();
            services.AddTransient<IChartHandler, ChartHandler>();
            return services;
        }
    }
}
