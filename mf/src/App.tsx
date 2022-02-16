import React from 'react';
// @ts-ignore
const Shell = React.lazy(() => import('shell/Shell'));

function App() {
  return (
    <React.Suspense fallback="loading shell">
      <Shell />
    </React.Suspense>
  );
}

export default App;
