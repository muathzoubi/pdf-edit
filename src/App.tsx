import { useState } from 'react';
import './App.css';
import ToolBar from './Toolbar';

import "https://para.se/proj/mv-sorter/mv-sorter.js";
import { Grid } from 'lucide-react';
import React from 'react';

const PDFDocument = () => {

}
function App() {
  const [count, setCount] = useState(0);
  const [showFileMenu, setshowFileMenu] = useState(false);
 
 


 
  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: 200 }}>
      <div style={{ flexDirection: 'column' }}>
        <div
          style={{
            position: 'fixed',
            left: 0,
            right: 0,
            width: '100%',
            background: 'black',
          }}
        >
          <ToolBar showFileMenu={showFileMenu} setshowFileMenu={setshowFileMenu} />
        </div>
        <div className="app">
          <div className="side">
 
          </div>
          <div className="page">
              
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
