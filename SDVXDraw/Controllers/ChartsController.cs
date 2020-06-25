using Microsoft.AspNetCore.Mvc;
using SDVXCore.Interfaces.Managers;
using SDVXCore.Types.Draw;

namespace SDVXDraw.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChartsController : ControllerBase
    {
        private readonly IChartManager _chartManager;
        public ChartsController(IChartManager chartManager)
        {
            _chartManager = chartManager;
        }

        [HttpPost]
        [Route("draw")]
        public DrawResponse DrawCharts([FromBody] DrawRequest req)
        {
            return _chartManager.Draw(req);
        }
    }
}
