using Microsoft.AspNetCore.Mvc;
using SDVXCore.Interfaces.Managers;

namespace SDVXDraw.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SongsController : ControllerBase
    {
        private readonly ISongManager _songManager;
        public SongsController(ISongManager songManager)
        {
            _songManager = songManager;
        }
    }
}
