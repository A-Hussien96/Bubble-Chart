import React from 'react';

import {BubbleSeries, ChartComponent, Inject, SeriesCollectionDirective,
    Tooltip, SeriesDirective, DataLabel, Zoom, ScrollBar} from'@syncfusion/ej2-react-charts';

import {
    tooltipSettings,
    markerSettings,
    zoomsettings,
    primaryyAxis,
    primaryxAxis,
    tooltipRender
} from "./ChartConstants";

export default class BubbleChart extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
    }

    UNSAFE_componentWillMount(){
        this.getData()
    }
    getData =()=>{
        let data = [
            { x: 0.1251, y: 0.7672, title: 'sports', color: '#FFD433', size: 40, 'tweets': ["sports is good", "I love sports"]},
            { x: 0.14861, y: 0.6064, title: 'music', color: '#0450C2', size: 30, 'tweets': ["I listen to music", "my favorite music", "jazz music"] },
            { x: 0.45555, y: -0.120244, title: 'games', color: '#0073DC', size: 15, 'tweets': ["wanna play games", "pc games"] },
            { x: -0.73489, y: 0.70027, title: 'movies', color: '#0D98FF', size: 10, 'tweets': ["comedy movies"] },
            { x: 0.17056, y: -0.27567, title: 'food', color: '#9CD9FF', size: 5, 'tweets': ["noodle dinner", "spaghetti"] },
        ];
        this.setState({data})
    };

    render() {
        return (
            <ChartComponent id='charts' tooltip={tooltipSettings} tooltipRender={tooltipRender} zoomSettings={zoomsettings} primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis}>
                <Inject services={[BubbleSeries, DataLabel, Tooltip, Zoom, ScrollBar]} />
                <SeriesCollectionDirective>
                    <SeriesDirective dataSource={this.state.data} xName='x' yName='y' tooltipMappingName='tweets'
                                     name='title' size='size' pointColorMapping='color' type='Bubble' marker={markerSettings}/>
                </SeriesCollectionDirective>
            </ChartComponent>
        );
    }
}
