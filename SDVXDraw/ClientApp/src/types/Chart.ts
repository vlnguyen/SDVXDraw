import { GameVersion, InfVersion, DifficultyType, ChartStatus } from "../utilities/enums";
import moment from 'moment';

export class Chart {
    constructor (
        songId: number,
        label: string,
        titleName: string,
        titleYomigana: string,
        artistName: string,
        artistYomigana: string,
        ascii: string,
        bpmMax: number,
        bpmMin: number,
        distributionDate: number,
        genre: number,
        version: GameVersion,
        infVersion: InfVersion,
        remywikiUrl: string,
        chartId: number,
        difficultyType: DifficultyType,
        difficulty: number,
        illustrator: string,
        effector: string,
        price: number,
        limit: number,
        jacketMask: number,
        jacketFilename: string,
        difficultyLabel: string,
        difficultyAcronym: string
    ) {
        this.songId = songId;
        this.label = label;
        this.titleName = titleName;
        this.titleYomigana = titleYomigana;
        this.artistName = artistName;
        this.artistYomigana = artistYomigana;
        this.ascii = ascii;
        this.bpmMax = bpmMax;
        this.bpmMin = bpmMin;
        this.distributionDate = distributionDate;
        this.genre = genre;
        this.version = version;
        this.infVersion = infVersion;
        this.remywikiUrl = remywikiUrl;
        this.chartId = chartId;
        this.difficultyType = difficultyType;
        this.difficulty = difficulty;
        this.illustrator = illustrator;
        this.effector = effector;
        this.price = price;
        this.limit = limit;
        this.jacketMask = jacketMask;
        this.jacketFilename = jacketFilename;
        this.difficultyLabel = difficultyLabel;
        this.difficultyAcronym = difficultyAcronym;

        this.status = ChartStatus.NONE;
    }
    songId: number;
    label: string;
    titleName: string;
    titleYomigana: string;
    artistName: string;
    artistYomigana: string;
    ascii: string;
    bpmMax: number;
    bpmMin: number;
    distributionDate: number;
    genre: number;
    version: GameVersion;
    infVersion: InfVersion;
    remywikiUrl: string;
    chartId: number;
    difficultyType: DifficultyType;
    difficulty: number;
    illustrator: string;
    effector: string;
    price: number;
    limit: number;
    jacketMask: number;
    jacketFilename: string;
    difficultyLabel: string;
    difficultyAcronym: string;
    status: ChartStatus;

    displayBpm = ():string => {
        return this.bpmMin === this.bpmMax
            ? `${Math.floor(this.bpmMin/100)}`
            : `${Math.floor(this.bpmMin/100)}-${Math.floor(this.bpmMax/100)}`
    }

    distributionDateFormatted = ():string => {
        const d = this.distributionDate.toString();
        const date = new Date(parseInt(d.substring(0, 4)), parseInt(d.substring(4, 6))-1, parseInt(d.substring(6, 8)));
        return moment(date).format("YYYY-MM-DD");
    }

    isVetoed = () => this.status === ChartStatus.VETOED;

    isProtected = () => this.status === ChartStatus.PROTECTED;
    
}
