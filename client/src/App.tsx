import React from 'react';
import AppShell from '@/layout/AppShell';
import ChartPreview from '@/app/containers/ChartPreview';
import StoreProvider from '@/app/storeProvider';

export default function App() {
  return (
    <StoreProvider>
      <AppShell>
        <React.Fragment>
          <ChartPreview />
        </React.Fragment>
      </AppShell>
    </StoreProvider>
  );
}
