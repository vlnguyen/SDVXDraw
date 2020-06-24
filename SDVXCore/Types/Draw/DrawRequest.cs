using SDVXCore.Enums;
using System.Collections.Generic;

namespace SDVXCore.Types.Draw
{
    public class DrawRequest
    {
        public int NumberOfSongs { get; set; }
        public int MinDifficulty { get; set; }
        public int MaxDifficulty { get; set; }
        public HashSet<GameVersion> GameVersions { get; set; }
        public HashSet<DifficultyType> DifficultyTypes { get; set; }
        public HashSet<InfVersion> InfVersions { get; set; }
    }
}
