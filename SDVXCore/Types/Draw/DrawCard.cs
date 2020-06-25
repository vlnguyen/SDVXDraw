using SDVXCore.Enums;

namespace SDVXCore.Types.Draw
{
    public class DrawCard
    {
        public int SongId { get; set; }
        public string Label { get; set; }
        public string TitleName { get; set; }
        public string TitleYomigana { get; set; }
        public string ArtistName { get; set; }
        public string ArtistYomigana { get; set; }
        public string Ascii { get; set; }
        public int BpmMax { get; set; }
        public int BpmMin { get; set; }
        public int DistributionDate { get; set; }
        public int Genre { get; set; }
        public GameVersion Version { get; set; }
        public InfVersion InfVersion { get; set; }
        public string RemywikiUrl { get; set; }
        public int ChartId { get; set; }
        public DifficultyType DifficultyType { get; set; }
        public int Difficulty { get; set; }
        public string Illustrator { get; set; }
        public string Effector { get; set; }
        public int Price { get; set; }
        public LimitType Limit { get; set; }
        public JacketMaskType JacketMask { get; set; }
        public string JacketFilename { get; set; }
        public string DifficultyLabel { get; set; }
        public string DifficultyAcronym { get; set; }
    }
}
