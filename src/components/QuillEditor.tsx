'use client';

import { useRef, useMemo } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '@/src/utils/editor.css';
import axios from 'axios';

export default function QuillEditor({ editorValue, setEditorValue }) {
  const quillRef = useRef(null);
  const imageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.addEventListener('change', async () => {
      const file = input.files[0];

      try {
        const res = await axios.post(`${process.env.URL}/api/image/`, {
          img: file,
        });
        const imgUrl = res.data.imgUrl;
        const editor = quillRef.current.getEditor();
        const range = editor.getSelection();
        editor.insertEmbed(range.index, 'image', imgUrl);
        editor.setSelection(range.index + 1);
      } catch (error) {
        console.log(error);
      }
    });
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ size: [] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ list: 'ordered' }, { list: 'bullet' }, { align: [] }],
          ['image', 'video'],
        ],
        handlers: { image: imageHandler },
      },
      clipboard: {
        matchVisual: false,
      },
    }),
    []
  );

  return (
    <ReactQuill
      ref={quillRef}
      onChange={setEditorValue}
      modules={modules}
      value={editorValue}
      theme='snow'
    />
  );
}
