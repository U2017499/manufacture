import React from 'react'
import { Bar } from 'react-chartjs-2'
import '../App.css'
function BarChart() {

    const data = {
        labels : ['P1' , 'P2' , 'P3', 'P4' , 'P5' , 'P6' , 'P7'],
        datasets : [
            {
                label: 'Product Manufatured ',
                data : [0,1,2,3,4,5,6],
                borderColor : ['rgba(255,206,86,0.2)'],
                backgroundColor : ['rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'],
                pointBackgroundColor : ['rgba(255,206,86,0.2)'],
                pointBorderColor : ['rgba(255,206,86,0.2)'],
            },
        ]
    }

    const options = {
        title : {
            display : true,
            text : 'Product Manufactured Today',
        },

        scales : {
            YAxes : [
                {
                ticks : {
                  min : 0,
                  max : 6,
                  stepSize : 1   
                }
            }
            ]
        }
    }
    return (
        <div className = "bar">
            <Bar data = {data} options = {options}/>
        </div>
        
    )
}

export default BarChart;

