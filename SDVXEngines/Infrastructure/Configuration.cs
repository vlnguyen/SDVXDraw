using SDVXCore.Interfaces.Engines;
using SDVXEngines;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class Configuration
    {
        public static IServiceCollection AddEngines(this IServiceCollection services)
        {
            services.AddTransient<ISongEngine, SongEngine>();
            services.AddTransient<IChartEngine, ChartEngine>();
            return services;
        }
    }
}