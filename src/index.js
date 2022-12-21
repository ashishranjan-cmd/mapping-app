import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { MyDocker } from './components/card';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <MyDocker status="running" terminal="Bash Shell"/>
    <MyDocker status="stopped" terminal="redhat terminal" />
    <MyDocker status="running" />
    <MyDocker status="running" />
    <MyDocker status="paused" />
    <MyDocker status="stopped" />
  </div>
  
);