import React from "react";
import { Chart } from "../../types/Chart";
import { Card, CardImg, CardBody, Button, ButtonGroup, Popover, PopoverHeader, PopoverBody } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { JACKETS_URL } from "../../utilities/constants";
import { gameVersionToString } from "../../utilities/utilities";
import './ChartCard.css';

interface IChartCardProps {
    chart: Chart;
    setIndex: number;
    onProtectClicked: () => void;
    onVetoClicked: () => void;
}

interface IChartCardState {
    isPopoverOpen: boolean;
}

export class ChartCard extends React.Component<IChartCardProps, IChartCardState> {

    state: Readonly<IChartCardState> = {
        isPopoverOpen: false
    };
    
    handleTogglePopover = () => this.setState({ isPopoverOpen: !this.state.isPopoverOpen });

    render() {
        const { chart, setIndex, onProtectClicked, onVetoClicked  } = this.props;
        const { isPopoverOpen } = this.state;
        const popoverTarget = `popover-${setIndex}-${chart.chartId}`;

        return (
            <Card key={chart.chartId}>
                <ButtonGroup>
                    {!chart.isVetoed() && 
                        <Button color={chart.isVetoed() ? undefined : "success"} onClick={onProtectClicked}>
                            <FontAwesomeIcon icon={faCheck}/>
                        </Button>
                    }
                    {!chart.isProtected() && 
                        <Button color={chart.isProtected() ? undefined : "danger"} onClick={onVetoClicked}>
                            <FontAwesomeIcon icon={faTimes}/>
                        </Button>
                    }
                </ButtonGroup>
                <CardImg top className={chart.isVetoed() ? "ChartCard-JacketVetoed" : undefined} width="100%" src={`${JACKETS_URL}/${chart.jacketFilename}.png`} alt={chart.ascii}/>
                <CardBody>
                    <div className="text-center">
                        <span 
                            id={popoverTarget} className={`ChartCard-DifficultyDisplay ChartCard-DifficultyDisplay-${chart.difficultyAcronym}`}
                            onClick={this.handleTogglePopover}
                        >
                            {chart.difficultyAcronym} {chart.difficulty}
                        </span>                    
                        <Popover placement="top" isOpen={isPopoverOpen} target={popoverTarget}>
                            <PopoverHeader>
                                {/* TODO: populate database with RemyWiki URLs */}
                                <a href={`https://google.com/search?q=${chart.titleName} remywiki`} target="_blank" rel="noreferrer noopener">
                                    {chart.titleName}
                                </a>
                            </PopoverHeader>
                            <PopoverBody className="ChartCard-PopoverBody">
                                <label>Artist:</label> {chart.artistName}<br />
                                <label>ASCII:</label> {chart.ascii}<br />
                                <label>BPM:</label> {chart.displayBpm()}<br />
                                <label>Date:</label> {chart.distributionDateFormatted()}<br />
                                <label>Effector:</label> {chart.effector}<br />
                                <label>Game:</label> {gameVersionToString(chart.version)}
                            </PopoverBody>
                        </Popover><br />
                        <div className="ChartCard-ChartTitle">{chart.titleName}</div>
                    </div>
                </CardBody>
            </Card>
        );
    }
}