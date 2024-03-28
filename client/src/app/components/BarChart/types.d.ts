import { ActionType } from 'typesafe-actions';
import { Actions } from './actions';
import { ApplicationRootState } from '@/libs/types';
import { _DeepPartialObject } from 'chart.js/dist/types/utils';
import { AnyObject } from 'chart.js/dist/types/basic';
import { ScriptableChartContext } from 'chart.js';

/* --- STATE --- */
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

/* --- ACTIONS --- */
type AppActions = ActionType<typeof Actions>;

/* --- EXPORTS --- */
type RootState = ApplicationRootState;
type ContainerState = IBarChartOptions;
type ContainerActions = AppActions;

export { RootState, ContainerState, ContainerActions };
