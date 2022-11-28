import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css';

function Chart(props) {

    const valueArray= props.dataPoints.map(x=>{
        return x.value;
    })
    const totalMax=Math.max(...valueArray);


    return (
        <div className="chart">
            {
                props.dataPoints.map(x=>{

                    return <ChartBar key={x.label} value={x.value} max={totalMax} label={x.label} />
                })

            }


        </div>
    )

}

export default Chart;