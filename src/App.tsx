import { useEffect, useRef, useState } from 'react';
import './App.css';
import ToolBar from './Toolbar';
import { PDFDocument } from 'pdf-lib';
import SideBar from './Side';
import { ClipboardPlus, MousePointer2Icon } from 'lucide-react';

function App() {
  const [showFileMenu, setshowFileMenu] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>();
  const [pdfDocument, setPdfDoc] = useState<PDFDocument | undefined>(undefined);
  const [pdffile, setPdfFile] = useState<any>('./5e69');
  const [offsetX, setoffsetX] = useState<number>(0);
  const [offsety, setoffsety] = useState<number>(0);
  const [x1, setX1] = useState<any>(0);
  const [x2, setX2] = useState<any>(0);
  const [y1, setY1] = useState<any>(0);
  const [y2, setY2] = useState<any>(0);
  const handlePdf = async () => {

    // PDF Creation
    const pdfDoc = await PDFDocument.create()
    const page = pdfDoc.addPage()
    page.drawText('You can create PDFs!')
    page.drawText('You can create PDFs!')
    page.drawText('You can create PDFs!')
    page.drawText('You can create PDFs!')
    page.drawText('You can create PDFs!')
    page.drawText('You can create PDFs!')
    page.drawText('You can create PDFs!')
    page.drawText('You can create PDFs!')
    page.drawText('You can create PDFs!')
    console.log(page)
    setPdfDoc(pdfDoc)
  }
  const pso = async () => {


  }
  useEffect(() => {
    handlePdf().then(async () => {

      setoffsetX(canvasRef.current?.offsetLeft!)
      setoffsety(canvasRef.current?.offsetTop!)
    })
  }, [])
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
          <div className="page" onMouseUp={(e) => {
            setX2(e.clientX)
            setY2(e.clientY)
            console.log(x1, y1)

          }} onMouseDown={(e) => {
            setX1(e.clientX)
            setY1(e.clientY)
            console.log(x2, y2)

          }}
            onMouseMove={(e) => {
              let mouseX = parseInt(e.clientX - offsety!);
              let mouseT = parseInt(e.clientY - offsety);

            }}>
            <canvas style={{ width: '100%', height: '100%' }} ref={canvasRef}> </canvas>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
