import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { MyDocker } from './components/card';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <MyDocker 
        status="running"
        terminal="Bash Shell"
        logoimg="https://pbs.twimg.com/profile_images/1123568405682970629/SpLGmNZr_400x400.png"
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