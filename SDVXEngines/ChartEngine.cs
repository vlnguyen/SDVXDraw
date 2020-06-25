using Microsoft.EntityFrameworkCore;
using SDVXCore.Enums;
using SDVXCore.Interfaces.Engines;
using SDVXCore.Interfaces.Handlers;
using SDVXCore.Types.Draw;
using SDVXCore.Types.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace SDVXEngines
{
    public class ChartEngine : IChartEngine
    {
        private readonly IChartHandler _chartHandler;
        public ChartEngine(IChartHandler chartHandler)
        {
            _chartHandler = chartHandler;
        }

        public IEnumerable<Chart> Draw(DrawRequest req)
        {
            var charts = _chartHandler.AsQueryable();

            if (req.MinDifficulty > 0)
            {
                charts = charts.Where(chart => chart.Difficulty >= req.MinDifficulty);
            }

            if (req.MaxDifficulty > 0)
            {
                charts = charts.Where(chart => chart.Difficulty <= req.MaxDifficulty);
            }

            // filter by difficulty type
            if (req.DifficultyTypes != null)
            {
                // filter by INF version
                if (req.InfVersions != null)
                {
                    charts = charts.Where(chart =>
                        (req.DifficultyTypes.Contains(chart.DifficultyType) 
                            && chart.DifficultyType == DifficultyType.INFINITE 
                            && req.InfVersions.Contains(chart.Song.InfVersion))
                        || req.DifficultyTypes.Contains(chart.DifficultyType)
                    );
                }
                else
                {
                    charts = charts.Where(chart => req.DifficultyTypes.Contains(chart.DifficultyType));
                }
            }

            // filter by game version
            if (req.GameVersions != null)
            {
                charts = charts.Where(chart => req.GameVersions.Contains(chart.Song.Version));
            }

            return charts.OrderBy(x => Guid.NewGuid()).Take(req.NumberOfSongs).Include(c => c.Song).ToList();
        }
    }
}
