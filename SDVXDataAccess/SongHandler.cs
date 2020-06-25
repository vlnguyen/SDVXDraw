using SDVXCore.Interfaces.Handlers;
using SDVXCore.Types.Models;
using SDVXDataAccess.Infrastructure;

namespace SDVXDataAccess
{
    public class SongHandler : BaseHandler<Song>, ISongHandler
    {
        public SongHandler(SDVXContext context) : base(context)
        {
        }
    }
}
