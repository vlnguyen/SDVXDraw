import { GameVersion } from "./enums";

export function gameVersionToString(gameVersion: GameVersion) {
    switch(gameVersion) {
        case GameVersion.BOOTH:
            return "BOOTH";
        case GameVersion.INFINITE_INFECTION:
            return "INFINITE INFECTION";
        case GameVersion.GRAVITY_WARS:
            return "GRAVITY WARS";
        case GameVersion.HEAVENLY_HAVEN:
            return "HEAVENLY HAVEN";
        case GameVersion.VIVIDWAVE:
            return "VIVIDWAVE";
    }
    
}