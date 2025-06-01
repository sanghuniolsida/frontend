import React, { useState, useEffect } from 'react';
import Main from '../../components/Main';
import './storyprocess.css';
import { useNavigate } from 'react-router-dom';

function StoryProcess() {
  const navigate = useNavigate();
  const stored = localStorage.getItem('midPartStory');
  const parsed = stored ? JSON.parse(stored) : null;

  const storyList = parsed?.midPartFairyTaleStory || [];
  const imageUrl = parsed?.imageUrl || '/default-image.png';
  const secondHalf = parsed?.secondHalfFairyTaleStory || [];
  const hasSecondHalf = secondHalf.length > 0;

  const fullStory = hasSecondHalf ? [...storyList, ...secondHalf] : storyList;

  const [pageIndex, setPageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [showModal, setShowModal] = useState(false);

  const currentText = fullStory[pageIndex];

  useEffect(() => {
    if (typeof currentText !== 'string' || currentText.length === 0) {
      setDisplayedText('');
      return;
    }

    let i = 0;
    let isMounted = true;

    setDisplayedText(currentText[0]); // 첫 글자부터 정확히 시작

    const interval = setInterval(() => {
      if (!isMounted) return;

      i++;
      if (i >= currentText.length) {
        clearInterval(interval);
        return;
      }

      setDisplayedText((prev) => prev + currentText[i]);
    }, 30);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [currentText]);

  const handlePrev = () => {
    if (pageIndex > 0) setPageIndex(pageIndex - 1);
  };

  const handleNext = () => {
    if (pageIndex < fullStory.length - 1) {
      setPageIndex(pageIndex + 1);
    } else {
      setShowModal(true);
    }
  };

  const handleRestart = () => {
    setPageIndex(0);
    setShowModal(false);
  };

  const handleGoToQuiz = () => {
    navigate('/quiz');
  };

  const handleGoToSecondStory = () => {
    navigate('/secondstory');
  };

  if (!parsed) {
    return (
      <Main>
        <div className="story-process-container">
          <p>동화 데이터를 불러올 수 없습니다.</p>
        </div>
      </Main>
    );
  }

  return (
    <Main>
      <div className="story-process-container">
        <div className="story-image-box">
          <img
            src={imageUrl}
            alt={`스토리 이미지`}
            className="story-image"
          />
        </div>

        <div className="story-text-box">
          <div className="page-indicator">{pageIndex + 1} / {fullStory.length}</div>
          <p className="story-text">{displayedText}</p>

          <div className="story-button-row">
            <button className="story-nav-btn" onClick={handlePrev} disabled={pageIndex === 0}>
              이전
            </button>
            {pageIndex === 3 && !hasSecondHalf ? (
              <button className="story-nav-btn" onClick={handleGoToSecondStory}>
                이어서 만들기
              </button>
            ) : (
              <button className="story-nav-btn" onClick={handleNext}>
                다음
              </button>
            )}
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>동화가 끝났어요! 다음으로 무엇을 할까요?</p>
            <div className="modal-buttons1">
              <button onClick={handleRestart}>다시 보기</button>
              <button onClick={handleGoToQuiz}>퀴즈 쏙!쏙!</button>
            </div>
          </div>
        </div>
      )}
    </Main>
  );
}

export default StoryProcess;
