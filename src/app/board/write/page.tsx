'use client';

import { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Post } from '../../api/posts/route';

const Editor = dynamic(() => import('../../../components/QuillEditor'), {
  ssr: false,
  loading: () => (
    <div role='status'>
      <svg
        aria-hidden='true'
        className='w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600'
        viewBox='0 0 100 101'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
          fill='currentColor'
        />
        <path
          d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
          fill='currentFill'
        />
      </svg>
    </div>
  ),
});

export default function Write() {
  const [editorValue, setEditorValue] = useState<string>('');
  const router = useRouter();
  const { data: sessionData } = useSession({
    required: true,
    onUnauthenticated() {
      alert('로그인 이후에 작성할 수 있습니다.');
      router.push('/');
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const resetForm = () => {
    reset();
    setEditorValue('');
  };
  const submitForm = async (formData: FieldValues) => {
    //formData.name = sessionData?.user?.name;
    formData.authorId = sessionData?.user?.email;
    formData.content = editorValue;
    console.log(formData);
    const { data } = await axios.post<Post>(
      `${process.env.NEXT_PUBLIC_URL}/api/posts`,
      formData
    );
    console.log(data);
    resetForm();
    router.push('/board');
  };

  return (
    <main className='min-h-[80vh] max-w-5xl mx-auto'>
      <form className=' w-full p-6'>
        <div>
          <label className='text-2xl font-semibold' htmlFor='title'>
            제목
          </label>
          <input
            className='block border border-gray-300 text-sm w-full p-2.5 mt-1.5 mb-2'
            {...register('title', {
              required: true,
            })}
            type='text'
            id='title'
          />
          <ErrorMessage errors={errors} name='title' />
        </div>
        <div className='text-xl font-semibold mt-5 mb-1.5'>내용</div>
        <Editor {...{ editorValue, setEditorValue }} />
      </form>
      <div className='flex justify-center space-x-5'>
        <Link href={'/board'}>
          <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
            취소
          </button>
        </Link>
        <button
          onClick={handleSubmit((data) => submitForm(data))}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          등록
        </button>
      </div>
    </main>
  );
}
