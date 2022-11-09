import {Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import styled from "styled-components/native";

export default function ChartScreen() {
    return (
        <Chart>
            <LineChart
                data={{
                    labels: ['May','June','July','Aug','Sept','Oct'],
                    datasets : [
                        {
                            data : [
                                Math.random() * 10,
                                Math.random() * 10,
                                Math.random() * 10,
                                Math.random() * 10,
                                Math.random() * 10,
                                Math.random() * 10,
                            ],
                        },
                    ],
                }}
                width = {Dimensions.get("window").width}
                height = {200}
                yAxisLabel = "$"
                yAxisSuffix = "k"
                chartConfig = {{
                    backgroundGradientFrom : "#1e1e1e",
                    backgroundGradientTo : "#1e1e1e",
                    color : (opacity = 1) => `rgba(81,150,244,${opacity})`,
                    labelColor : () => `rgba(255,255,255,0.2)`,
                    strokeWidth : 3,
                }}
                widthVerticalLines = {false}
                widthHorizontalLines = {false}
                bezier
            />
        </Chart>
    );
}

const Chart = styled.View`
    margin : 32px 0;
`;
