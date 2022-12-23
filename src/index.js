import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { MyDocker } from './components/card';
import mydata from './App';

function datafunc(data){
  return(
    <MyDocker 
        status={data.status}
        terminal={data.terminal}
        logoimg={data.logoimg}
    />
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1>Container Manager</h1>
    {mydata.map(datafunc)}
    {/*
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
*/}
  </div>
);