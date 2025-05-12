// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Library from './pages/Library';
import StoryProcess from './pages/StoryProcess';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/library" element={<Library />} />
        <Route path="/storyprocess" element={<StoryProcess />} />
        {/* 다른 페이지들도 여기 추가 */}
      </Routes>
    </Router>
  );
}

export default App;
