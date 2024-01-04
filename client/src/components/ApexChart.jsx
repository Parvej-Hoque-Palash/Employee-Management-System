import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';

const ApexChart = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch all employees initially
    axios.get('https://server-phi-blush.vercel.app/api/employee/').then((res) => setUsers(res.data));
  }, []);

  const chartData = {
    series: [{
      name: "Age",
      data: users.map((user) => user.age),
    }],
    options: {
      chart: {
        height: 350, // Adjusted height
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'Age of Employees by ID',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5
        },
      },
      xaxis: {
        categories: users.map((user) => user.id),
      }
    },
  };

  return (
    <div id="chart" className='text-black bg-white'>
      <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={350} />
    </div>
  );
};

export default ApexChart;
