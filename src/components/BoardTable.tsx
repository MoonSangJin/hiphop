'use client';
import axios from 'axios';
import { Post } from '../app/api/posts/route';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const getPosts = async () => {
  const { data } = await axios.get<Post[]>(
    `${process.env.NEXT_PUBLIC_URL}/api/posts`
  );
  return data;
};

export default function BoardTable({ initialData }: { initialData: Post[] }) {
  const router = useRouter();
  const { data, isLoading } = useQuery<Post[]>({
    queryKey: ['stream-hydrate-posts'],
    queryFn: () => getPosts(),
    initialData,
  });

  if (isLoading) {
    // 로딩 중일 때 보여줄 UI
    return <div>Loading...</div>;
  }

  return (
    <div className='bg-white pb-4 rounded-md w-full'>
      <div className='overflow-x-auto'>
        <table className='table-auto border-collapse w-full'>
          <thead>
            <tr className='rounded-lg text-sm font-medium text-gray-700 text-left'>
              <th className='px-4 py-2 bg-gray-200 '>번호</th>
              <th className='px-4 py-2 bg-gray-200 '>제목</th>
              <th className='px-4 py-2 bg-gray-200 '>글쓴이</th>
            </tr>
          </thead>
          <tbody className='text-sm font-normal text-gray-700'>
            {data?.map((i) => (
              <tr
                onClick={() => router.push(`board/posts/${i.id}`)}
                key={i.id}
                className='hover:bg-gray-100  border-gray-200 hover:cursor-pointer'
              >
                <td className='px-4 py-4'>{i.id}</td>
                <td className='px-4 py-4'>{i.title}</td>
                <td className='px-4 py-4'>{i.authorId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
