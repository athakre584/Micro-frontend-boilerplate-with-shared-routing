import React, {Suspense} from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Login from './components/login';

import remoteRoutes from 'mf/routes';
import './style.scss';

const routes = [...remoteRoutes];

const Shell = () => {
  return (
    <Router>
      <Suspense fallback={'Loading'}>
        <Routes>
          <Route path="/" element={<Login />} />
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
