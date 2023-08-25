import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import * as echarts from 'echarts';

const ChartComponent = () => {
  const chartRef = useRef(null);
  const [data, setData] = useState({});

  useEffect(() => {
    // Make the API call to fetch the data
    axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all')
      .then(response => {
        setData(response.data.cases);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    if (Object.keys(data).length === 0) return;

    const dates = Object.keys(data);
    const cases = Object.values(data);

    const chart = echarts.init(chartRef.current);

    const option = {
      xAxis: {
        type: 'category',
        data: dates,
        boundaryGap: false
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        type: 'line',
        data: cases,
        smooth: true
      }]
    };

    chart.setOption(option);

    // Clean up
    return () => {
      chart.dispose();
    };
  }, [data]);

  return (
    <>
    <h2>Total Active Cases</h2>
    <div ref={chartRef} style={{ width: '800px', height: '600px' }}></div>
    </>
  );
};

export default ChartComponent;
