import React, { useState } from 'react';
import Main from '../../components/Main';
import './quiz.css';

function Quiz() {
  // 동화 슬라이드 상태
  const [currentSlide, setCurrentSlide] = useState(0);
  // 퀴즈 문제 상태
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const images = [
    '/quiz1.png',
    '/quiz2.png',
    '/quiz3.png',
    '/quiz4.png'
  ];
   //나중에 api 연동시 서버에서 받아오는 내용을 채우도록 할거임.
  const questions = [
    {
      question: "퀴즈1",
      options: ["선택지 1", "선택지 2", "선택지 3", "선택지 4"]
    },
    {
      question: "퀴즈2",
      options: ["빨강", "파랑", "노랑", "초록"]
    },
    {
      question: "퀴즈3",
      options: ["고양이", "강아지", "용", "새"]
    },
    {
      question: "퀴즈4",
      options: ["봄", "여름", "가을", "겨울"]
    }
  ];

  // 슬라이드 좌우 이동
  const handleSlidePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleSlideNext = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // 퀴즈 문제 전환
  const handleQuestionPrev = () => {
    setCurrentQuestionIndex((prev) => (prev === 0 ? questions.length - 1 : prev - 1));
  };

  const handleQuestionNext = () => {
    setCurrentQuestionIndex((prev) => (prev === questions.length - 1 ? 0 : prev + 1));
  };

  return (
    <Main>
      <div className="quiz-page">
        {/* 상단 동화 슬라이드 영역 */}
        <div className="quiz-images">
          <div className="quiz-images-wrapper" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {images.map((image, index) => (
              <img key={index} src={image} alt={`장면${index + 1}`} />
            ))}
          </div>
          <div className="quiz-slide-buttons">
            <button onClick={handleSlidePrev}>←</button>
            <button onClick={handleSlideNext}>→</button>
          </div>
        </div>

        {/* 퀴즈 영역 */}
        <div className="quiz-question-section">
          <div className="quiz-number">
            {questions.map((_, i) => (
              <span key={i} className={currentQuestionIndex === i ? 'active' : ''}>{i + 1}</span>
            ))}
          </div>

          <div className="quiz-question-box">
            <p>{questions[currentQuestionIndex].question}</p>
          </div>

          <div className="quiz-options">
            {questions[currentQuestionIndex].options.map((option, i) => (
               <button key={i}>{option}</button>
            ))}
          </div>

          <div className="quiz-nav-buttons">
            <button onClick={handleQuestionPrev}>이전</button>
            <button onClick={handleQuestionNext}>다음</button>
          </div>
        </div>
      </div>
    </Main>
  );
}

export default Quiz;