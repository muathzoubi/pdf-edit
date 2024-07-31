import {
  Type,
  Image,
  FileText,
  ClipboardPlus,
  Link,
  NotebookPen,
  Eye,
  Settings,
} from 'lucide-react';
import { Button, CloseButton, Modal, Offcanvas } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';


const ToolBar = (props: { showFileMenu: boolean, setshowFileMenu: any }) => {

  return (
    <nav>
      <Modal centered show={props.showFileMenu} onExit={() => props.setshowFileMenu(false)} >
        <Modal.Body className='bg-dark row'  >
          <CloseButton onClick={() => { props.setshowFileMenu(false) }} />
          <Button className=' ROW my-1 px-1' variant="warning">New +</Button>
          <Button className='col my-1 px-1' variant="primary"> Edit</Button>
          <Button className='col my-1 px-1' variant="primary">View</Button>
        </Modal.Body> 
      </Modal>
      <div style={{ marginRight: 'auto' }}>
        <button className='menu' onClick={() => props.setshowFileMenu(true)}>File</button>
        <button className='menu'>Edit</button>
        <button className='menu'>View</button>
      </div>
      <div style={{ margin: 'auto' }}>
        <button>
          <Eye size={16} />
        </button>
        <button>
          <ClipboardPlus size={16} />
        </button>
        <button>
          <Image size={16} />
        </button>
        <button>
          <Type size={16} />
        </button>
        <button>
          <FileText size={16} />
        </button>
        <button>
          <Link size={16} />
        </button>
        <button>
          <NotebookPen size={16} />
        </button>
      </div>
      <div style={{ marginLeft: 'auto' }}>
        <button className='menu'>
          <Settings size={16} />
        </button>
      </div>
    </nav>
  );
};
export default ToolBar;
