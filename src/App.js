import React from 'react';

import './App.css';
import Header from './pages/header';
import SideBar from './pages/sidebar';
import Router from './components/router';
//import './vendor/bootstrap/css/bootstrap.min.css'

function App() {
  return (
    <div className="bg-light border-right" id="sidebar-wrapper">
    <Header />
    <div className="d-flex" id="wrapper">
      <div className="bg-light-sidebar border-right" id="sidebar-wrapper">
      <SideBar />
      </div>
      <div id="page-content-wrapper">
      <Router/>
      </div>
    </div>
  </div>
  );
}

export default App;
