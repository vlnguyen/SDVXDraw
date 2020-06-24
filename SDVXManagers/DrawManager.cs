using SDVXCore.Interfaces.Engines;
using SDVXCore.Interfaces.Managers;
using SDVXCore.Types.Draw;
using System;
using System.Collections.Generic;

namespace SDVXManagers
{
    public class DrawManager : IDrawManager
    {
        private readonly ISongEngine _songEngine;
        private readonly IChartEngine _chartEngine;
        public DrawManager(ISongEngine songEngine, IChartEngine chartEngine)
        {
            _songEngine = songEngine;
            _chartEngine = chartEngine;
        }

        public DrawResponse Draw(DrawRequest req)
        {
            return new DrawResponse()
            {
                DrawnCharts = new List<DrawCard>()
            };
        }
    }
}
