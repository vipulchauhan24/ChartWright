import React, { useEffect, useRef, useState } from 'react';
import {
  Chart as ChartJS,
  BarController,
  CategoryScale,
  LinearScale,
  BarElement,
  Legend,
  Tooltip,
  ScriptableChartContext
} from 'chart.js';
import './ChartPreview.scss';
import { _DeepPartialObject } from 'chart.js/dist/types/utils';
import { AnyObject } from 'chart.js/dist/types/basic';
import { useAppSelector } from '@/libs/redux-hook';

interface IBarChartOptions {
  indexAxis: 'x' | 'y';
  xAxis: {
    grid: {
      offset: boolean;
      display: boolean;
    };
  };
  yAxis: {
    grid: {
      offset: boolean;
      display: boolean;
    };
  };
  plugins: {
    legend: {
      display: boolean;
      position:
        | 'top'
        | 'center'
        | 'right'
        | 'bottom'
        | 'left'
        | 'chartArea'
        | _DeepPartialObject<{ [scaleId: string]: number }>
        | undefined;
      align: 'center' | 'start' | 'end' | undefined;
      labels: {
        color: string;
        font: {
          weight:
            | number
            | 'bold'
            | 'normal'
            | 'lighter'
            | 'bolder'
            | ((
                ctx: ScriptableChartContext,
                options: AnyObject
              ) =>
                | number
                | 'bold'
                | 'normal'
                | 'lighter'
                | 'bolder'
                | null
                | undefined)
            | null
            | undefined;
        };
      };
    };
  };
}

function ChartPreview() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const barChartOpions: IBarChartOptions = useAppSelector(
    (state) => state.barChart as IBarChartOptions
  );
  // const [barChartOpions] = useState<IBarChartOptions>({
  //   indexAxis: 'x',
  //   xAxis: {
  //     grid: {
  //       offset: false,
  //       display: false
  //     }
  //   },
  //   yAxis: {
  //     grid: {
  //       offset: false,
  //       display: false
  //     }
  //   },
  //   plugins: {
  //     legend: {
  //       display: true,
  //       position: 'top',
  //       align: 'center',
  //       labels: {
  //         color: '#000',
  //         font: {
  //           weight: 'bold'
  //         }
  //       }
  //     }
  //   }
  // });

  useEffect(() => {
    if (!canvasRef.current) return;
    ChartJS.register(
      BarElement,
      BarController,
      CategoryScale,
      LinearScale,
      Legend,
      Tooltip
    );
    const ctx = canvasRef.current.getContext('2d');
    let myChart: any;
    if (ctx) {
      myChart = new ChartJS(ctx, {
        type: 'bar',
        options: {
          responsive: true,
          indexAxis: barChartOpions.indexAxis, //y for horizontal bar chart
          scales: {
            x: {
              ...barChartOpions.xAxis
            },
            y: {
              ...barChartOpions.yAxis
            }
          },
          plugins: {
            ...barChartOpions.plugins
          }
        },
        data: {
          labels: [65, 59, 80, 81, 56, 55, 40],
          datasets: [
            {
              label: 'My First Dataset',
              data: [65, 59, 80, 81, 56, 55, 40],
              borderColor: '#36A2EB',
              borderWidth: 2,
              borderRadius: 5,
              backgroundColor: '#9BD0F5',
              hoverBackgroundColor: '#FFB1C1',
              hoverBorderColor: '#FFB1C1',
              hoverBorderWidth: 5,
              barPercentage: 0.5,
              barThickness: 60
            }
          ]
        }
      });
    } else {
      // Handle the case where the canvas element or context is not available
      console.error('Canvas context not found');
    }

    return () => myChart.destroy();
  }, [canvasRef, barChartOpions]);

  return (
    <div className="chart-preview__container">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

export default ChartPreview;
