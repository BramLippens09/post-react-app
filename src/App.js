import PostList from './components/PostList';
import { PostProvider } from './contexts/PostProvider';

function App() {
  return (
    <PostProvider>
      <PostList />
    </PostProvider>
  );
}

export default App;
