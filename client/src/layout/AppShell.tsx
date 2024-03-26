import React, { ReactElement } from 'react';
import AppSidebar from './AppSidebar';
import AppHeader from './AppHeader';
function AppShell({ children }: { children: ReactElement }) {
  return (
    <div className="columns">
      <div className="column">
        <AppSidebar />
      </div>
      <div className="column is-three-quarters">
        <AppHeader />
        {children}
      </div>
    </div>
  );
}

export default AppShell;
