'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
  content: string;
}

export default function Board() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios.get<Post[]>('/api/posts').then((response) => {
      setPosts(response.data);
    });
  }, []);

  if (posts.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <h2>게시판</h2>
      <div>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`board/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
        <button>
          <Link href={`board/write`}>글쓰기</Link>
        </button>
      </div>
    </main>
  );
}
