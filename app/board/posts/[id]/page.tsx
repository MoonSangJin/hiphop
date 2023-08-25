'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

interface Post {
  title: string;
  content: string;
}

export default function PostDetail({ params }: { params: { id: string } }) {
  const id = params.id;
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (id) {
      axios.get<Post>(`/api/posts/${id}`).then((response) => {
        setPost(response.data);
      });
    }
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
