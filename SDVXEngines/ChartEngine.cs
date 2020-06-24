using SDVXCore.Interfaces.Engines;
using SDVXCore.Interfaces.Handlers;
using SDVXCore.Types.Models;
using System;
using System.Collections.Generic;

namespace SDVXEngines
{
    public class ChartEngine : IChartEngine
    {
        private readonly IChartHandler _chartHandler;
        public ChartEngine(IChartHandler chartHandler)
        {
            _chartHandler = chartHandler;
        }

        public IEnumerable<Chart> GetCharts()
        {
            return _chartHandler.GetAll();
        }
    }
}
