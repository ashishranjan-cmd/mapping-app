import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { MyDocker } from './components/card';
import mydata from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <MyDocker 
        status={mydata[0].status}
        terminal={mydata[0].terminal}
        logoimg={mydata[0].logoimg}
    />
    <MyDocker 
        status={mydata[1].status}
        terminal={mydata[1].terminal}
        logoimg={mydata[1].logoimg}
    />
    <MyDocker 
        status={mydata[2].status}
        terminal={mydata[2].terminal}
        logoimg={mydata[2].logoimg}
    />
  </div>
  
);