import './App.css';
import Header from './layout/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllPostPage from './pages/allPostPage/AllPostPage';
import WritePage from './pages/writePage/WritePage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<AllPostPage />} />
          <Route path='/write' element={<WritePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
