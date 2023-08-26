'use client';

import { useState } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { convertToRaw, EditorState } from 'draft-js';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import draftToHtml from 'draftjs-to-html';
import dynamic from 'next/dynamic';

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false }
);

export default function Write() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onEditorStateChange = (editorState) => setEditorState(editorState);

  const submitForm = (formData: any) => {
    formData.extraMessage = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );
    console.log(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit((formData) => submitForm(formData))}>
        <div>
          <label htmlFor='title'>제목</label>
          <input
            {...register('title', {
              required: '❌ 제목은 필수 입력 사항입니다',
            })}
            type='text'
            id='title'
          />
          <ErrorMessage
            errors={errors}
            name='title'
          />
        </div>
        <h2>내용</h2>
        <Editor
          // 초기값 설정
          editorState={editorState}
          // 에디터의 값이 변경될 때마다 onEditorStateChange 호출
          onEditorStateChange={onEditorStateChange}
          toolbar={{
            options: [
              'inline',
              'fontSize',
              'fontFamily',
              'list',
              'textAlign',
              'link',
              'embedded',
              'emoji',
              'image',
            ],
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
          }}
          // 한국어 설정
          localization={{
            locale: 'ko',
          }}
        />
        <div>초기화</div>
        <button>submit</button>
      </form>
    </>
  );
}
