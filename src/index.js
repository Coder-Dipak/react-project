import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//bootstrap imports from local machine"npm i bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; //or we can add cdn link of same in index.html
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root')); 

//*app component will be rendered inside root container. 
root.render( 
  // <React.StrictMode>
  <BrowserRouter> 
     <App />               {/* App component or parent most component,now enabled with routing feature */}
  </BrowserRouter>
  // </React.StrictMode>
);

/* //program-6:
export default function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>Now The Time is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
}
setInterval(tick, 1000);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
