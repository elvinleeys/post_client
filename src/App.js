import './App.css';
import Header from './layout/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllPostPage from './pages/allPostPage/AllPostPage';
import WritePage from './pages/writePage/WritePage';
import PostCard from './components/postCard/PostCard';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<AllPostPage />} />
          <Route path='/write' element={<WritePage />} />
          <Route path="/:id" element={<PostCard />} />
        </Routes>
        <ToastContainer position="top-right" autoClose={2000} />
      </div>
    </BrowserRouter>
  );
}

export default App;
