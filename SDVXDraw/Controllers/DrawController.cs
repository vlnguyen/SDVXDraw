using Microsoft.AspNetCore.Mvc;
using SDVXCore.Types.Models;
using SDVXDataAccess;
using System.Collections.Generic;
using System.Linq;

namespace SDVXDraw.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DrawController : Controller
    {
        private readonly SDVXContext _db;
        public DrawController(SDVXContext db)
        {
            _db = db;
        }
    }
}
