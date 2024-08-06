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
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, CloseButton, InputGroup, Modal } from 'react-bootstrap';
import { useState } from 'react';


const ToolBar = (props: { showFileMenu: boolean, setshowFileMenu: any }) => {
const [showmodal,setShowModal]=useState(false)
  return (
    <nav>
     <Dropdown  data-bs-theme="dark" >
    <button className='menu my-1 p-0'> <Dropdown.Toggle  id="dropdown-button-dark-example1" size='sm' variant="warning" >
       File
        </Dropdown.Toggle></button>

        <Dropdown.Menu className='border border-warning-subtle  ' >
          <Dropdown.Item color='outline-warning'  href="#/action-1"  >
          import 
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">Save</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Save As</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-4">Print</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div style={{ marginRight: 'auto' }}>
      
      <button className='my-1 mt-1 menu'  >Edit</button> 
          <button className='my-1 mt-1  menu' >View</button>
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
        <button   className="mt-1 menu">

          <Settings size={16}onClick={()=>setShowModal(true)} />
          <SettingsModal show ={showmodal} setShow={setShowModal}/>
        </button>
      </div>
    </nav>
  );
};
export default ToolBar;
const SettingsModal=(props:{show:boolean,setShow:any})=>{
  return (<Modal show={props.show}>

    <Modal.Header>
    <h3>Settings</h3>
    <CloseButton onClick={()=>props.setShow(false)}/>

    </Modal.Header>
    <Modal.Body>
<InputGroup>
<input className='mx-2' type='checkbox'/>
<label> This Is Label</label></InputGroup>
    </Modal.Body>
    <Modal.Footer>
<Button onClick={()=>props.setShow(false)}>Close</Button>
    </Modal.Footer>

    
  </Modal>)
}