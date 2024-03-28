import { action } from 'typesafe-actions';

export enum ActionTypes {
  UPDATE_BAR_CHART_OPTIONS = 'UPDATE_BAR_CHART_OPTIONS',
  TOGGLE_X_AXIS_GRID_LINES = 'TOGGLE_X_AXIS_GRID_LINES'
}

const updateBarChartOptions = (options: any) =>
  action(ActionTypes.UPDATE_BAR_CHART_OPTIONS, options);

const togglexAxisGridLines = (visible: boolean) =>
  action(ActionTypes.TOGGLE_X_AXIS_GRID_LINES, visible);

export const Actions = {
  updateBarChartOptions,
  togglexAxisGridLines
};
