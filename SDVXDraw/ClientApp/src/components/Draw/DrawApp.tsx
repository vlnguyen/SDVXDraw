import React, { Component } from 'react';
import DrawFilters from './DrawFilters';
import { IDrawFiltersFormValues } from '../../types/DrawFiltersFormValues';
import { getCardDraw } from '../../utilities/apiHandler';
import { CardGroup } from 'reactstrap';
import { ChartCard } from './ChartCard';
import { ChartStatus } from '../../utilities/enums';
import { Chart } from '../../types/Chart';
import './DrawApp.css';
import { MIN_DIFFICULTY, MAX_DIFFICULTY } from '../../utilities/constants';

interface IDrawAppProps { }

interface IDrawAppState {
    drawnSets: Chart[][];
    isDrawing: boolean;
}

export default class DrawApp extends Component<IDrawAppProps, IDrawAppState> {
    
    state: Readonly<IDrawAppState> = {
        drawnSets: [],
        isDrawing: false
    }

    handleDraw = async (formValues: IDrawFiltersFormValues) => {
        this.setState({ isDrawing: true}, async () => {
            const request: IDrawFiltersFormValues = {
                ...formValues,
                minDifficulty: formValues.minDifficulty || MIN_DIFFICULTY,
                maxDifficulty: formValues.maxDifficulty || MAX_DIFFICULTY
            };
            const cardDraw = await getCardDraw(request);
            if (cardDraw.length > 0) {
                const newDrawnSets = [...this.state.drawnSets];
                newDrawnSets.unshift(cardDraw);
                this.setState({ drawnSets: newDrawnSets });
            }
            this.setState({ isDrawing: false });
        })
    }

    handleClear = () => {
        this.setState({ drawnSets: [] });
    }

    handleProtectClicked = (setIndex: number, chartIndex: number) => {
        const newDrawnSets = [...this.state.drawnSets];
        const newChart = newDrawnSets[setIndex][chartIndex];
        newChart.status = newChart.status === ChartStatus.PROTECTED
            ? ChartStatus.NONE
            : ChartStatus.PROTECTED;
        this.setState({ drawnSets: newDrawnSets });
    }
    
    handleVetoClicked = (setIndex: number, chartIndex: number) => {
        const newDrawnSets = [...this.state.drawnSets];
        const newChart = newDrawnSets[setIndex][chartIndex];
        newChart.status = newChart.status === ChartStatus.VETOED
            ? ChartStatus.NONE
            : ChartStatus.VETOED;
        this.setState({ drawnSets: newDrawnSets });
    }

    render() {
        return (
            <>
                <DrawFilters isDrawing={this.state.isDrawing} onDraw={this.handleDraw} onClear={this.handleClear} />
                <div style={{ paddingTop: "8px" }}>
                    {this.state.drawnSets.map((cardDraw: Chart[], setIndex: number) => 
                        <div key={setIndex} className="DrawApp-DrawnSet">
                            <CardGroup style={{ paddingBottom: "16px" }}>
                                {cardDraw.map((chart: Chart, chartIndex: number) => 
                                    <ChartCard 
                                        key={chart.chartId} 
                                        chart={chart}
                                        setIndex={setIndex}
                                        onProtectClicked={() => this.handleProtectClicked(setIndex, chartIndex)}
                                        onVetoClicked={() => this.handleVetoClicked(setIndex, chartIndex)}
                                    />
                                )}
                            </CardGroup>
                        </div>
                    )}
                </div>
            </>
        );
    }
}
