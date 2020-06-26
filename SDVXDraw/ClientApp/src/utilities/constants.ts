import { GameVersion, InfVersion, DifficultyType } from "./enums";
import { gameVersionToString } from "./utilities";

export const JACKETS_URL = "https://s3.us-east-2.amazonaws.com/sdvx.app/jackets";

export const MIN_DIFFICULTY = 1;
export const MAX_DIFFICULTY = 20;

export const DEFAULT_NUM_SONGS = 5;
export const MIN_NUM_SONGS = 1;
export const MAX_NUM_SONGS = 9;

export const GameVersionDropdown = [
    { name: gameVersionToString(GameVersion.BOOTH), value: GameVersion.BOOTH },
    { name: gameVersionToString(GameVersion.INFINITE_INFECTION), value: GameVersion.INFINITE_INFECTION },
    { name: gameVersionToString(GameVersion.GRAVITY_WARS), value: GameVersion.GRAVITY_WARS},
    { name: gameVersionToString(GameVersion.HEAVENLY_HAVEN), value: GameVersion.HEAVENLY_HAVEN },
    { name: gameVersionToString(GameVersion.VIVIDWAVE), value: GameVersion.VIVIDWAVE }
];

export const DifficultyTypeDropdown = [
    { name: "NOV", value: DifficultyType.NOVICE },
    { name: "ADV", value: DifficultyType.ADVANCED },
    { name: "EXH", value: DifficultyType.EXHAUST },
    { name: "MXM", value: DifficultyType.MAXIMUM },
    { name: "INF, GRV, HVN, VVD", value: DifficultyType.INFINITE }
]

export const InfVersionDropdown = [
    { name: "INF", value: InfVersion.INF },
    { name: "GRV", value: InfVersion.GRV },
    { name: "HVN", value: InfVersion.HVN },
    { name: "VVD", value: InfVersion.VVD }
]
