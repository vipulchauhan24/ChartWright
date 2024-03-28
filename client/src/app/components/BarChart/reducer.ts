import { ActionTypes } from './actions';
import { ContainerState, ContainerActions } from './types';

// The initial state of the App
export const initialState: ContainerState = {
  indexAxis: 'x',
  xAxis: {
    grid: {
      offset: false,
      display: false
    }
  },
  yAxis: {
    grid: {
      offset: false,
      display: false
    }
  },
  plugins: {
    legend: {
      display: true,
      position: 'top',
      align: 'center',
      labels: {
        color: '#000',
        font: {
          weight: 'bold'
        }
      }
    }
  }
};

const barChartReducer: any = (
  state: ContainerState = initialState,
  action: ContainerActions
): ContainerState => {
  switch (action.type) {
    case ActionTypes.UPDATE_BAR_CHART_OPTIONS:
      return {
        ...state,
        ...action.payload
      };
    case ActionTypes.TOGGLE_X_AXIS_GRID_LINES:
      return {
        ...state,
        xAxis: {
          grid: {
            ...state.xAxis.grid,
            display: action.payload
          }
        }
      };
    default:
      return state;
  }
};

export default barChartReducer;
