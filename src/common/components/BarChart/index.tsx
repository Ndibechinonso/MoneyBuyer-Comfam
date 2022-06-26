import { useState, useEffect } from "react";

import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title } from 'chart.js';

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);

export const BarChart = () => {
  const [chartData, setChartData] = useState({
    labels: [""],
    datasets: [{label: "", data: [0], backgroundColor: [""], borderRadius: 0}]
});

  useEffect(() => {
    
    const fetchSamplings = async () => {
        const res = await fetch("https://api.coincap.io/v2/assets/?limit=5")
        // const data = await res.json();
        const data =  [79, 45, 30, 35, 28, 49, 26, 47, 15, 30, 20, 28]

        // console.log(data)
        setChartData({
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Decr'],
            datasets: [{
                label: "Money Received",
                data: data,
                backgroundColor: ["#D6D6FF", "#D6D6FF", "#D6D6FF", "#D6D6FF", "#D6D6FF", "#D6D6FF", "#D6D6FF", "#D6D6FF", "#D6D6FF", "#D6D6FF", "#D6D6FF", "#D6D6FF"],
                borderRadius: 8                 
            }]
        });
    }
    fetchSamplings();        
}, [])

  return (
    <div className="money_recived_container">
    <h4>Money Received</h4>
    <div style={{width:"100%", height: "461px"}}>
    <Chart type='bar' style={{background: "#FFFFFF"}}  options={{
    plugins: {
      legend: {
        display: false
      }
    },
    layout: {
      padding: 32
  },
      responsive: true,
      maintainAspectRatio: false,
      backgroundColor: "#000000",
       scales: {
        x: {
          grid: {
            display: false
          }
        },
        y: {
          grid: {
            display: false
          }, 
          min: 0,
          max: 100,
          ticks: {
            stepSize: 20,
            callback: function(val: any, index, ticks) {
              // Hide the label of every 2nd dataset              
              return  this.getLabelForValue(val) + "K";
            }
          }
          
        }
      }
      }} data={chartData} />
    </div>
    </div>
  )
  };

export default BarChart;