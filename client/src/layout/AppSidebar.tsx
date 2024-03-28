import { Actions } from '@/app/components/BarChart/actions';
import { useAppDispatch } from '@/libs/redux-hook';
import React, { useEffect, useState } from 'react';

export default function AppSidebar() {
  const dispatch = useAppDispatch();
  const [xAxisGridLineVisible, setXAxisGridLineVisible] =
    useState<boolean>(false);

  const onGridLinesToggle = (axis: 'x' | 'y') => {
    if (axis === 'x') setXAxisGridLineVisible((prev) => !prev);
  };

  useEffect(() => {
    dispatch(Actions.togglexAxisGridLines(xAxisGridLineVisible));
  }, [xAxisGridLineVisible]);

  return (
    <aside>
      <h1>Logo</h1>
      <div className="columns mt-4">
        <div className="column">
          <label className="checkbox">
            <input
              type="checkbox"
              checked={xAxisGridLineVisible}
              onChange={() => {
                onGridLinesToggle('x');
              }}
            />
            x-axis grid lines
          </label>
        </div>
      </div>
    </aside>
  );
}
