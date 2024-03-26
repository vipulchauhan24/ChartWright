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
    ChartJS.register(BarElement, BarController, CategoryScale, LinearScale);
    const ctx = canvasRef.current.getContext('2d');
    let myChart: ChartJS;
    if (ctx) {
      myChart = new ChartJS(ctx, {
        type: 'bar',
        data: {
          labels: data.map((row) => row.year),
          datasets: [
            {
              label: 'Acquisitions by year',
              data: data.map((row) => row.count),
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
