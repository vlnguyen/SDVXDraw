using SDVXCore.Enums;
using System.ComponentModel.DataAnnotations;

namespace SDVXCore.Types.Models
{
    public class Chart
    {
        public int ChartId { get; set; }
        public DifficultyType DifficultyType { get; set; }
        public int Difficulty { get; set; }
        [StringLength(255)]
        public string Illustrator { get; set; }
        [StringLength(255)]
        public string Effector { get; set; }
        public int Price { get; set; }
        public LimitType Limit { get; set; }
        public JacketMaskType JacketMask { get; set; }
        [StringLength(255)]
        public string JacketFilename { get; set; }

        public int SongId { get; set; }
        public virtual Song Song { get; set; }
    }
}
