// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
<<<<<<< HEAD
import QuestionSectionPage from './pages/QuestionSection';
import CreatingPage from './pages/Creating';
=======
import Library from './pages/Library';
import StoryProcess from './pages/StoryProcess';
>>>>>>> 5c6d00d4c4fb456028be74d09759f14dfc58d2b7

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
<<<<<<< HEAD
        <Route path="/question" element={<QuestionSectionPage />} />
        <Route path="/creating" element={<CreatingPage />} />
=======
        <Route path="/library" element={<Library />} />
        <Route path="/storyprocess" element={<StoryProcess />} />
>>>>>>> 5c6d00d4c4fb456028be74d09759f14dfc58d2b7
        {/* 다른 페이지들도 여기 추가 */}
      </Routes>
    </Router>
  );
}

export default App;
