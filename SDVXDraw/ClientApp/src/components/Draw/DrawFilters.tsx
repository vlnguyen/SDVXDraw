import React, { Component } from 'react';
import { Form, FormGroup, Input, Row, Col, Collapse, Button, Container, Label } from 'reactstrap';
import { MIN_NUM_SONGS, MAX_NUM_SONGS,  MIN_DIFFICULTY, MAX_DIFFICULTY, GameVersionDropdown, InfVersionDropdown, DEFAULT_NUM_SONGS, DifficultyTypeDropdown } from '../../utilities/constants';
import { IDrawFiltersFormValues } from '../../types/DrawFiltersFormValues';
import { GameVersion, DifficultyType, InfVersion } from '../../utilities/enums';

import './DrawFilters.css';

interface IDrawFiltersProps {
    isDrawing: boolean;
    onDraw: (formValues: IDrawFiltersFormValues) => void;
    onClear: () => void;
}

interface IDrawFiltersState {
    shouldShowFilters: boolean;
    formValues: IDrawFiltersFormValues;
}

export default class DrawFilters extends Component<IDrawFiltersProps, IDrawFiltersState>{
    
    state = {
        shouldShowFilters: false,
        formValues: {
            numberOfSongs: 5,
            minDifficulty: 16,
            maxDifficulty: 19,
            gameVersions: [
                GameVersion.BOOTH,
                GameVersion.INFINITE_INFECTION,
                GameVersion.GRAVITY_WARS,
                GameVersion.HEAVENLY_HAVEN,
                GameVersion.VIVIDWAVE,
            ],
            difficultyTypes: [
                DifficultyType.EXHAUST,
                DifficultyType.INFINITE,
                DifficultyType.MAXIMUM
            ],
            infVersions: [
                InfVersion.INF,
                InfVersion.GRV,
                InfVersion.HVN,
                InfVersion.VVD
            ]
        }
    }

    handleToggleFilterVisibility = () => {
        this.setState({ shouldShowFilters: !this.state.shouldShowFilters });
    }

    handleNumberOfSongsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            ...this.state,
            formValues: {
                ...this.state.formValues,
                numberOfSongs: parseInt(event.target.value)
            }
        });
    }

    handleMinDifficultyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            ...this.state,
            formValues: {
                ...this.state.formValues,
                minDifficulty: parseInt(event.target.value)
            }
        });
    }

    handleMaxDifficultyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            ...this.state,
            formValues: {
                ...this.state.formValues,
                maxDifficulty: parseInt(event.target.value)
            }
        });
    }

    handleGameVersionSelectionToggle = (event: React.ChangeEvent<HTMLInputElement>, gameVersion: GameVersion) => {
        let newGameVersions = [...this.state.formValues.gameVersions];
        if (event.target.checked) {
            newGameVersions.push(gameVersion);
        }
        else {
            newGameVersions = newGameVersions.filter(g => g !== gameVersion);
        }
        this.setState({
            ...this.state,
            formValues: {
                ...this.state.formValues,
                gameVersions: newGameVersions
            }
        });
    }

    handleInfVersionSelectionToggle = (event: React.ChangeEvent<HTMLInputElement>, infVersion: InfVersion) => {
        let newInfVersions = [...this.state.formValues.infVersions];
        if (event.target.checked) {
            newInfVersions.push(infVersion);
        }
        else {
            newInfVersions = newInfVersions.filter(v => v !== infVersion);
        }
        this.setState({
            ...this.state,
            formValues: {
                ...this.state.formValues,
                infVersions: newInfVersions
            }
        });
    }

    handleDifficultyTypeSelectionToggle = (event: React.ChangeEvent<HTMLInputElement>, difficultyType: DifficultyType) => {
        let newDifficuiltyTypes = [...this.state.formValues.difficultyTypes];
        if (event.target.checked) {
            newDifficuiltyTypes.push(difficultyType);
        }
        else {
            newDifficuiltyTypes = newDifficuiltyTypes.filter(d => d !== difficultyType);
        }
        this.setState({
            ...this.state,
            formValues: {
                ...this.state.formValues,
                difficultyTypes: newDifficuiltyTypes
            }
        });
    }

    render() {
        const { isDrawing, onDraw, onClear } = this.props;
        const { shouldShowFilters, formValues } = this.state;
        return (
            <div className="DrawFilters">
                <Container>
                    <Row style={{ paddingBottom: "8px"}}>
                        <Col span={16}>
                            <Button color="success" disabled={isDrawing} onClick={() => onDraw(formValues)}>
                                {isDrawing ? "Drawing..." : "Draw!" }
                            </Button>{" "}
                            <Button color="primary" onClick={this.handleToggleFilterVisibility}>{shouldShowFilters ? "Hide" : "Show"} Filters</Button>{" "}
                            <Button onClick={onClear}>Clear</Button>
                        </Col>
                    </Row>
                    <Collapse isOpen={shouldShowFilters}>
                        <Form>
                            <Row form>
                                <Col sm={4}>
                                    <FormGroup>
                                        <strong>Number of Songs</strong>
                                        <Input 
                                            type="number" 
                                            value={formValues.numberOfSongs} 
                                            placeholder={DEFAULT_NUM_SONGS.toString()} 
                                            min={MIN_NUM_SONGS} max={MAX_NUM_SONGS}
                                            onChange={this.handleNumberOfSongsChange}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col sm={4}>
                                    <FormGroup>
                                        <strong>Minimum Difficulty</strong>
                                        <Input 
                                            type="number" 
                                            value={formValues.minDifficulty} 
                                            placeholder={MIN_DIFFICULTY.toString()} 
                                            min={MIN_DIFFICULTY} max={MAX_DIFFICULTY}
                                            onChange={this.handleMinDifficultyChange}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col sm={4}>
                                    <FormGroup>
                                        <strong>Maximum Difficulty</strong>
                                        <Input 
                                            type="number" 
                                            value={formValues.maxDifficulty} 
                                            placeholder={MAX_DIFFICULTY.toString()} 
                                            min={MIN_DIFFICULTY} max={MAX_DIFFICULTY} 
                                            onChange={this.handleMaxDifficultyChange}
                                        />
                                    </FormGroup>  
                                </Col> 
                            </Row>
                            <Row form>
                                <Col xs={6} sm={4}>
                                    <strong>Difficulty Type</strong>
                                    {DifficultyTypeDropdown.map(difficultyType => 
                                        <FormGroup check key={difficultyType.value}>
                                            <Label check>{" "}
                                                <Input 
                                                    type="checkbox"
                                                    checked={formValues.difficultyTypes.some(d => d === difficultyType.value)}
                                                    onChange={e => this.handleDifficultyTypeSelectionToggle(e, difficultyType.value)}
                                                />{difficultyType.name}
                                            </Label>
                                        </FormGroup>
                                    )}
                                </Col>
                                <Col xs={6} sm={4}>
                                    <strong>Inf Version</strong>
                                    {InfVersionDropdown.map(infVersion => 
                                        <FormGroup check key={infVersion.value}>
                                            <Label check>{" "}
                                                <Input 
                                                    type="checkbox"
                                                    disabled={!formValues.difficultyTypes.some(d => d === DifficultyType.INFINITE)}
                                                    checked={formValues.infVersions.some(v => v === infVersion.value)}
                                                    onChange={e => this.handleInfVersionSelectionToggle(e, infVersion.value)}
                                                />{infVersion.name}
                                            </Label>
                                        </FormGroup>
                                    )}
                                </Col>
                                <Col sm={4}>
                                    <strong>Game Version</strong>
                                    {GameVersionDropdown.map(gameVersion => 
                                        <FormGroup check key={gameVersion.value}>
                                            <Label check>{" "}
                                                <Input 
                                                    type="checkbox" 
                                                    checked={formValues.gameVersions.some(g => g === gameVersion.value)}
                                                    onChange={e => this.handleGameVersionSelectionToggle(e, gameVersion.value)}
                                                />{gameVersion.name}
                                            </Label>
                                        </FormGroup>
                                    )}
                                </Col>
                            </Row>
                        </Form>
                    </Collapse>
                </Container>
            </div>
        )
    }
}
