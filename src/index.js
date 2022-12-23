import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { MyDocker } from './components/card';
import mydata from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <MyDocker 
        status={mydata.status}
        terminal={mydata.terminal}
        logoimg={mydata.logoimg}
    />
    <MyDocker 
        status="stopped"
        terminal="redhat terminal" 
        logoimg="https://assets.ubuntu.com/v1/29985a98-ubuntu-logo32.png"
    />
    <MyDocker status="running" />
    <MyDocker status="running" />
    <MyDocker status="paused" />
    <MyDocker status="stopped" />
  </div>
  
);