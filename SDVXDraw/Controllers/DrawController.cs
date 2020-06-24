using Microsoft.AspNetCore.Mvc;
using SDVXCore.Interfaces.Managers;
using SDVXCore.Types.Draw;

namespace SDVXDraw.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DrawController : Controller
    {
        private readonly IDrawManager _drawManager;
        public DrawController(IDrawManager drawManager)
        {
            _drawManager = drawManager;
        }

        [HttpPost]
        public DrawResponse GetDraw([FromBody] DrawRequest req)
        {
            return _drawManager.Draw(req);
        }
    }
}
