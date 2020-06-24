using SDVXCore.Enums;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SDVXCore.Types.Models
{
    public class Song
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int SongId { get; set; }
        [StringLength(255)]
        public string Label { get; set; }
        [StringLength(255)]
        public string TitleName { get; set; }
        [StringLength(255)]
        public string TitleYomigana { get; set; }
        [StringLength(255)]
        public string ArtistName { get; set; }
        [StringLength(255)]
        public string ArtistYomigana { get; set; }
        [StringLength(255)]
        public string Ascii { get; set; }
        public int BpmMax { get; set; }
        public int BpmMin { get; set; }
        public int DistributionDate { get; set; }
        public int Genre { get; set; }
        public GameVersion Version { get; set; }
        public InfVersion InfVersion { get; set; }
        [StringLength(255)]
        public string RemywikiUrl { get; set; }
        [StringLength(255)]

        public virtual ICollection<Chart> Charts { get; set; }
    }
}
