using SDVXCore.Interfaces.Engines;
using SDVXCore.Interfaces.Managers;

namespace SDVXManagers
{
    public class SongManager : ISongManager
    {
        private readonly ISongEngine _songEngine;
        public SongManager(ISongEngine songEngine)
        {
            _songEngine = songEngine;
        }
    }
}
