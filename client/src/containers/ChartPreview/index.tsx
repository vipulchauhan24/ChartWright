import React, { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  BarController,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';
function ChartPreview() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const data = [
      { year: 2010, count: 10 },
      { year: 2011, count: 20 },
      { year: 2012, count: 15 },
      { year: 2013, count: 25 },
      { year: 2014, count: 22 },
      { year: 2015, count: 30 },
      { year: 2016, count: 28 },
    ];
    const dataSet = [
      {
        label: '1',
        data: 10,
        borderColor: '#4287f5',
        backgroundColor: '#4287f5',
        borderWidth: 2,
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
      },
      {
        label: '2',
        data: 14,
        borderColor: '#4287f5',
        backgroundColor: '#4287f5',
        borderWidth: 2,
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
      },
      {
        label: '3',
        data: 9,
        borderColor: '#4287f5',
        backgroundColor: '#4287f5',
        borderWidth: 2,
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
      },
    ];
    ChartJS.register(BarElement, BarController, CategoryScale, LinearScale);
    const ctx = canvasRef.current.getContext('2d');
    let myChart: any;
    if (ctx) {
      myChart = new ChartJS(ctx, {
        type: 'bar',
        data: {
          labels: ['A'],
          datasets: [
            {
              label: 'A',
              data: [10],
              borderColor: '#36A2EB',
              borderWidth: 2,
              backgroundColor: '#9BD0F5',
              borderRadius: 5,
              barThickness: 50,
              hoverBackgroundColor: '#FFB1C1',
              hoverBorderColor: '#FFB1C1',
            },
            {
              label: 'B',
              data: [20],
              borderColor: '#FF6384',
              borderWidth: 2,
              backgroundColor: '#FFB1C1',
              borderRadius: 5,
              barThickness: 50,
              hoverBackgroundColor: '#9BD0F5',
              hoverBorderColor: '#9BD0F5',
            },
            {
              label: 'C',
              data: [20],
              borderColor: '#FF6384',
              borderWidth: 2,
              backgroundColor: '#FFB1C1',
              borderRadius: 5,
              borderSkipped: true,
              barThickness: 50,
              hoverBackgroundColor: '#9BD0F5',
              hoverBorderColor: '#9BD0F5',
            },
          ],
        },
      });
    } else {
      // Handle the case where the canvas element or context is not available
      console.error('Canvas context not found');
    }

    return () => myChart.destroy();
  }, [canvasRef]);

  return (
    <div>
      <h1>ChartPreview</h1>
      <div className="container">
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
}

export default ChartPreview;
