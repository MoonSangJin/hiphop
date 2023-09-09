'use client';

import React, { useRef, useMemo } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '@/src/utils/editor.css';
import axios from 'axios';

interface EditorType {
  editorValue: string;
  setEditorValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function QuillEditor({
  editorValue,
  setEditorValue,
}: EditorType) {
  const quillRef = useRef<ReactQuill | null>(null);
  const imageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.addEventListener('change', async () => {
      const file = input.files ? input.files[0] : null;
      const editor = quillRef.current?.getEditor();

      if (file && editor) {
        try {
          const res = await axios.post(`${process.env.URL}/api/image/`, {
            img: file,
          });
          const imgUrl = res.data.imgUrl;

          const range = editor.getSelection();
          if (range) {
            const position = range.index;
            editor.clipboard.dangerouslyPasteHTML(
              position,
              `<img src="${imgUrl}" alt="Image" />`
            );
          }
        } catch (error) {
          console.log(error);
        }
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
