import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { stopReportingRuntimeErrors } from "react-error-overlay";

if (process.env.NODE_ENV === "development") {
  stopReportingRuntimeErrors(); // disables error overlays
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);