import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Missing from './components/Missing';
import LinkPage from './components/LinkPage';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      {/* public routes */}
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="linkpage" element={<LinkPage />} />
      {/* catch all */}
      <Route path="*" element={<Missing />} />
    </Routes>
  );
}

export default App;
