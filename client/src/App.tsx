import React from 'react';
import AppShell from './layout/AppShell';
import ChartPreview from './containers/ChartPreview';

export default function App() {
  return (
    <AppShell>
      <React.Fragment>
        <ChartPreview />
      </React.Fragment>
    </AppShell>
  );
}
