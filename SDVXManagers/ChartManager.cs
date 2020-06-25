using SDVXCore.Enums;
using SDVXCore.Interfaces.Engines;
using SDVXCore.Interfaces.Managers;
using SDVXCore.Types.Draw;
using SDVXCore.Types.Models;
using System;
using System.Linq;

namespace SDVXManagers
{
    public class ChartManager : IChartManager
    {
        private readonly ISongEngine _songEngine;
        private readonly IChartEngine _chartEngine;
        public ChartManager(ISongEngine songEngine, IChartEngine chartEngine)
        {
            _songEngine = songEngine;
            _chartEngine = chartEngine;
        }

        public DrawResponse Draw(DrawRequest req)
        {
            var drawnCharts = _chartEngine.Draw(req).Select(chart =>
            {
                (string difficultyLabel, string difficultyAcronym) = DetermineDifficultyLabelAndAcronym(chart);
                return new DrawCard()
                {
                    SongId = chart.SongId,
                    Label = chart.Song.Label,
                    TitleName = chart.Song.TitleName,
                    TitleYomigana = chart.Song.TitleYomigana,
                    ArtistName = chart.Song.ArtistName,
                    ArtistYomigana = chart.Song.ArtistYomigana,
                    Ascii = chart.Song.Ascii,
                    BpmMax = chart.Song.BpmMax,
                    BpmMin = chart.Song.BpmMin,
                    DistributionDate = chart.Song.DistributionDate,
                    Genre = chart.Song.Genre,
                    Version = chart.Song.Version,
                    InfVersion = chart.Song.InfVersion,
                    RemywikiUrl = chart.Song.RemywikiUrl,
                    ChartId = chart.Id,
                    DifficultyType = chart.DifficultyType,
                    Difficulty = chart.Difficulty,
                    Illustrator = chart.Illustrator,
                    Effector = chart.Effector,
                    Price = chart.Price,
                    Limit = chart.Limit,
                    JacketMask = chart.JacketMask,
                    JacketFilename = chart.JacketFilename,
                    DifficultyLabel = difficultyLabel,
                    DifficultyAcronym = difficultyAcronym
                };
            });

            return new DrawResponse()
            {
                DrawnCharts = drawnCharts
            };
        }

        private (string Label, string Acronym) DetermineDifficultyLabelAndAcronym(Chart chart)
        {
            return chart.DifficultyType switch
            {
                DifficultyType.NOVICE => ("Novice", "NOV"),
                DifficultyType.ADVANCED => ("Advanced", "ADV"),
                DifficultyType.EXHAUST => ("Exhaust", "EXH"),
                DifficultyType.INFINITE => DetermineInfiniteLabelAndAcronym(chart.Song),
                DifficultyType.MAXIMUM => ("Maximum", "MXM"),
                _ => throw new NotImplementedException("Unrecognized difficulty type.")
            };
        }

        private (string Label, string Acronym) DetermineInfiniteLabelAndAcronym(Song song)
        {
            return song.InfVersion switch
            {
                InfVersion.INF => ("Infinite", "INF"),
                InfVersion.GRV => ("Gravity", "GRV"),
                InfVersion.HVN => ("Heavenly", "HVN"),
                InfVersion.VVD => ("Vivid", "VVD"),
                _ => throw new NotImplementedException("Unrecognized difficulty type.")
            };
        }
    }
}
