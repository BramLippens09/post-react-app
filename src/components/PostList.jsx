import { useContext } from 'react';
import { PostContext } from '../contexts/PostProvider';
import Post from './Post';

export default function PostList() {
  const { posts, loading, error } = useContext(PostContext);
  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}
