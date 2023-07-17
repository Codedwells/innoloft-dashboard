import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(import('react-quill'), { ssr: false });

interface EditorProps {
    value: string;
    onChange: React.Dispatch<React.SetStateAction<string>>;
}

const Editor = ({ value, onChange }: EditorProps) => {
    return (
        <div>
            <ReactQuill theme="snow" value={value} onChange={onChange} placeholder="Write description" />
        </div>
    );
};

export default Editor;
