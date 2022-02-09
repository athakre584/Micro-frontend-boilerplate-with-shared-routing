import React, {Suspense} from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

import remoteRoutes from 'mf/routes';
import './style.scss';
import Home from './components/home';

const routes = [...remoteRoutes];

const Shell = () => {
  return (
    <Router>
      <Suspense fallback={'Loading'}>
        <Routes>
          <Route path="/" element={<Home />} />
          {routes.map((x, i) => (
            <Route key={i} path={x.path} element={<x.component />} title={x.title} />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default Shell;
