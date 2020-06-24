using SDVXCore.Types.Models;
using System.Collections.Generic;

namespace SDVXCore.Interfaces.Engines
{
    public interface IChartEngine
    {
        IEnumerable<Chart> GetCharts();
    }
}
