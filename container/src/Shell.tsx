import React, {Suspense} from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
// @ts-ignore
import remoteRoutes from 'mf/routes';
import './style.scss';
import Home from './components/home/home';

const routes = [...remoteRoutes];

const Shell = () => {
  return (
    <Router>
      <Suspense fallback={'Loading'}>
        <Routes>
          <Route path="/" element={<Home />} />
          {routes.map((x, i) => (
            <Route
              key={i}
              path={x.path}
              element={<x.component />}
              // title={x.title}
            />
          ))}
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default Shell;
