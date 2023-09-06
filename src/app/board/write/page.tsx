'use client';

import { SetStateAction, useState } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { convertToRaw, EditorState } from 'draft-js';
import { FieldValues, useForm } from 'react-hook-form';
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

  const onEditorStateChange = (editorState: SetStateAction<EditorState>) =>
    setEditorState(editorState);

  const submitForm = (formData: FieldValues) => {
    formData.contents = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );
    console.log(formData);
  };

  return (
    <>
      <form
        className='w-full m-auto px-5 md:px-20 pt-7'
        onSubmit={handleSubmit((formData) => submitForm(formData))}
      >
        <div>
          <label className='text-2xl font-semibold' htmlFor='title'>
            제목
          </label>
          <input
            className='block bg-gray-50 border border-gray-300 text-sm w-full p-2.5 mt-1.5 mb-5'
            {...register('title', {
              required: '❌ 제목은 필수 입력 사항입니다',
            })}
            type='text'
            id='title'
          />
          <ErrorMessage errors={errors} name='title' />
        </div>
        <div className='text-xl font-semibold mb-1.5'>내용</div>
        <Editor
          // 초기값 설정
          editorState={editorState}
          // 에디터의 값이 변경될 때마다 onEditorStateChange 호출
          onEditorStateChange={onEditorStateChange}
          // 에디터와 툴바 모두에 적용되는 클래스
          wrapperClassName='bg-gray-50 border border-gray-300'
          // 에디터 주변에 적용된 클래스
          editorClassName='p-2.5'
          toolbar={{
            options: [
              'inline',
              'fontSize',
              'fontFamily',
              'textAlign',
              'link',
              'embedded',
              'emoji',
              'image',
            ],
            inline: { inDropdown: true },
            textAlign: { inDropdown: true },
          }}
          // 한국어 설정
          localization={{
            locale: 'ko',
          }}
        />
        <button>submit</button>
      </form>
    </>
  );
}
