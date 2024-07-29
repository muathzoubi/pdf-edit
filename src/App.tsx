import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ToolBar from './Toolbar';

function App() {
  const [count, setCount] = useState(0);

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
          <ToolBar />
        </div>
        <div className="app">
          <div className="side"></div>
          <div className="page"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
