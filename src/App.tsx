import { useEffect, useRef, useState } from 'react';
import './App.css';
import ToolBar from './Toolbar';
import { PDFDocument } from 'pdf-lib';
import SideBar from './Side';
import { ClipboardPlus, MousePointer2Icon } from 'lucide-react';

function App() {
  const [showFileMenu, setshowFileMenu] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>();
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
          <div className='miniBar'>
            <button className='active'>
              <MousePointer2Icon size={16} />
            </button>  <button>
              <ClipboardPlus size={16} />
            </button>             </div>
          <SideBar />
          <div className="page paper">
            <canvas style={{ width: '100%', height: '100%' }} ref={canvasRef}> </canvas>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
