using SDVXCore.Interfaces.Engines;
using SDVXCore.Interfaces.Handlers;

namespace SDVXEngines
{
    public class SongEngine : ISongEngine
    {
        private readonly ISongHandler _songHandler;
        public SongEngine(ISongHandler songHandler)
        {
            _songHandler = songHandler;
        }
    }
}
