import { IDrawFiltersFormValues } from "../types/DrawFiltersFormValues";
import { Chart } from "../types/Chart";

export async function getCardDraw(formValues: IDrawFiltersFormValues):Promise<Chart[]> {
    return await fetch (
        'api/charts/draw',
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formValues)
        }
    )
    .then(data => data.json())
    .then(data => { 
        return data.drawnCharts.map((row: any) => new Chart(
            row.songId,
            row.label,
            row.titleName,
            row.titleYomigana,
            row.artistName,
            row.artistYomigana,
            row.ascii,
            row.bpmMax,
            row.bpmMin,
            row.distributionDate,
            row.genre,
            row.version,
            row.infVersion,
            row.remywikiUrl,
            row.chartId,
            row.difficultyType,
            row.difficulty,
            row.illustrator,
            row.effector,
            row.price,
            row.limit,
            row.jacketMask,
            row.jacketFilename,
            row.difficultyLabel,
            row.difficultyAcronym
        ));
    });
}
