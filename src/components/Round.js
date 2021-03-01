import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import '../App.css'
function Chart3() {

    const data = {
        labels : ['P1' , 'P2' , 'P3', 'P4' , 'P5' , 'P6' , 'P7'],
        datasets : [
            {
                label: 'Product Manufatured ',
                data : [0,1,2,3,4,5,6],
                borderColor : ['rgba(255,206,86,0.2)'],
                backgroundColor : ['rgba(255, 100, 132, 0.5)',
                'rgba(154, 162, 235, 0.3)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(175, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.5)',
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
    }
    return (
        <div className = "bar">
            <Doughnut data = {data} options = {options}/>
        </div>
        
    )
}

export default Chart3;

