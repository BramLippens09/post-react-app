import { createContext, useContext, useEffect, useState, useMemo, useCallback } from 'react';

import axios from 'axios';

export const PostContext = createContext();
export const usePostContext = () => useContext(PostContext);

export const PostProvider = ({ children }) => {
  const [initialLoad, setInitialLoad] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  const refreshPosts = useCallback(async () => {
    try {
      setError();
      setLoading(true);
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!initialLoad) {
      refreshPosts();
      setInitialLoad(true);
    }
  }, [initialLoad, refreshPosts]);

  const providerValue = useMemo(
    () => ({
      posts,
      error,
      loading,
      currentPost,
      setCurrentPost,
      refreshPosts,
    }),
    [posts, error, loading, currentPost, setCurrentPost, refreshPosts]
  );

  return <PostContext.Provider value={providerValue}>{children}</PostContext.Provider>;
};
