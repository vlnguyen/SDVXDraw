using SDVXCore.Interfaces.Handlers;
using SDVXCore.Types.Models;
using SDVXDataAccess.Infrastructure;

namespace SDVXDataAccess
{
    public class ChartHandler : BaseHandler<Chart>, IChartHandler
    {
        public ChartHandler(SDVXContext context) : base(context)
        {
        }
    }
}
