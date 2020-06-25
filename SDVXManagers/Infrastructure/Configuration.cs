
using SDVXCore.Interfaces.Managers;
using SDVXManagers;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class Configuration
    {
        public static IServiceCollection AddManagers(this IServiceCollection services)
        {
            services.AddTransient<IChartManager, ChartManager>();
            services.AddTransient<ISongManager, SongManager>();
            return services;
        }
    }
}