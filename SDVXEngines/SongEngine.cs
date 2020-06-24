using SDVXCore.Interfaces.Engines;
using SDVXCore.Interfaces.Handlers;
using SDVXCore.Types.Models;
using System.Collections.Generic;

namespace SDVXEngines
{
    public class SongEngine : ISongEngine
    {
        private readonly ISongHandler _songHandler;
        public SongEngine(ISongHandler songHandler)
        {
            _songHandler = songHandler;
        }

        public IEnumerable<Song> GetSongs()
        {
            return _songHandler.GetAll();
        }
    }
}
