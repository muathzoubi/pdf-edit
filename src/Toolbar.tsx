import {
  Type,
  Image,
  FileText,
  ClipboardPlus,
  Link,
  NotebookPen,
  Eye,
} from 'lucide-react';
const ToolBar = () => {
  return (
    <nav>
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
    </nav>
  );
};
export default ToolBar;
