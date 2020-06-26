import { GameVersion, DifficultyType, InfVersion,  } from "../utilities/enums";

export interface IDrawFiltersFormValues {
    numberOfSongs: number;
    minDifficulty: number;
    maxDifficulty: number;
    gameVersions: GameVersion[];
    difficultyTypes: DifficultyType[];
    infVersions: InfVersion[];
}
