import React from 'react';
import Main from "./main/Main";
import './App.css';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <div className="app-wrapper mdl-layout mdl-js-layout mdl-layout--fixed-header">
              <Main/>
          </div>
      </BrowserRouter>
  );
}

export default App;
