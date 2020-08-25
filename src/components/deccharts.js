import React, { useContext } from 'react';
import Jsoncontext from '../context/context';
import { Bar } from 'react-chartjs-2';
let dataset = {};
function Decchart() {
    let { total } = useContext(Jsoncontext)
    let xlabels = []
    let datum = []
    if (total) {
        for (let i = 0; i < total.length; i++) {
            xlabels.push(total[i].date.substring(0, 6))
            datum.push(total[i].dailyconfirmed)

        }

        dataset = {
            labels: xlabels,
            datasets: [{
                label: 'Deceased',
                data: datum,
                backgroundColor: "rgba(255, 121, 121,1.0)",
                borderWidth: 1
            }]
        }
    }




    return (
        <div className='Chart'>
            <div className='Chart_wrapper__title'>
                <h2>Daily Deceased Cases</h2>
            </div>
            <div className='Chart_wrapper'>
                <Bar
                    data={dataset}

                    options={
                        {
                            maintainAspectRatio: false,
                            responsive: true,

                            scales: {
                                xAxes: [
                                    {
                                        gridLines: {
                                            drawOnChartArea: false,
                                        },
                                        ticks: {
                                            autoSkip: true,
                                            maxTicksLimit: 20
                                        }
                                    }
                                ],
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: true,
                                        callback: function (value, index, values) {
                                            if (value >= 0 && value < 1000) return value;
                                            if (value >= 1000 && value < 1000000) return (value / 1000) + "k";
                                            if (value >= 1000000 && value < 1000000000) return (value / 1000000) + "m";
                                            return value;
                                        }
                                    }
                                }]

                            },

                        }
                    }
                />
            </div>
        </div>
    )
}



export default Decchart