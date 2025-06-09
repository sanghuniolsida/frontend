// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import QuestionSectionPage from './pages/QuestionSection';
import CreatingPage from './pages/Creating';
import Library from './pages/Library';
import StoryProcess from './pages/StoryProcess';
import StatsPage from './pages/StatsPage';
import SecondStoryPage from './pages/SecondStory';
import LibraryStory from './pages/LibraryStory';
import PreSecondPage from './pages/PreSecond';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/question" element={<QuestionSectionPage />} />
        <Route path="/creating" element={<CreatingPage />} />
        <Route path="/library" element={<Library />} />
        <Route path="/storyprocess" element={<StoryProcess />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/secondstory" element={<SecondStoryPage />} />
        <Route path="/librarystory" element={<LibraryStory />} />
        <Route path="/presecond" element={<PreSecondPage />} />
      </Routes>
    </Router>
  );
}

export default App;
