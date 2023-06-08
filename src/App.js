import './App.css';
import Days from './components/Days';
import Header from './components/Header';
import Write from './components/Write';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <nav>
        <ul>
          <li><Link to="/days">일기 보기</Link></li>
          <li><Link to="/write">일기 쓰기</Link></li>
          <li><Link to="/setting">설정</Link></li>
        </ul>
      </nav>
      <div>
        <Routes>
          <Route path='/' element={<h2>WELCOME</h2>} />
          <Route path='/write' element={<Write />} />
          <Route path='/days' element={<Days />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
