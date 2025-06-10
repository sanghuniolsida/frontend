import React, { useState, useEffect } from 'react';
import Main from '../../components/Main';
import './predefined.css';
import { useNavigate } from 'react-router-dom';

function PredefinedStoryPage() {
  const navigate = useNavigate();
  const stored = localStorage.getItem('midPartStory');
  const parsed = stored ? JSON.parse(stored) : null;

  const midPart = parsed?.midPartFairyTaleStory || [];
  const secondHalf = parsed?.secondHalfResultStory || [];
  const storyList = [...midPart, ...secondHalf];
  const totalLength = storyList.length;

  const [pageIndex, setPageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [showModal, setShowModal] = useState(false);

  const [imageUrls, setImageUrls] = useState(
    Array.from({ length: totalLength }, (_, i) => parsed?.imageUrls?.[i] || null)
  );

  const [showImage, setShowImage] = useState(() => {
    return Array.from({ length: totalLength }, (_, i) =>
      secondHalf.length > 0 ? i < midPart.length : false
    );
  });



  const [isGenerating, setIsGenerating] = useState(false);

  const currentText = storyList[pageIndex];

  useEffect(() => {
    if (typeof currentText !== 'string' || currentText.length === 0) {
      setDisplayedText('');
      return;
    }

    let i = 0;
    let isMounted = true;
    setDisplayedText(currentText[0]);

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
    if (pageIndex < storyList.length - 1) {
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
    navigate('/presecond');
  };

  const handleGenerateImage = () => {
    // 이미지 이미 있는 경우 클릭해도 재생성 막기
    if (showImage[pageIndex]) return;

    setIsGenerating(true);

    setTimeout(() => {
      const updatedImages = [...imageUrls];
      updatedImages[pageIndex] = parsed?.imageUrls?.[pageIndex] || '/default-image.png';
      setImageUrls(updatedImages);

      const updatedShow = [...showImage];
      updatedShow[pageIndex] = true;
      setShowImage(updatedShow);

      setIsGenerating(false);
    }, 7000);
  };


  if (!parsed) {
    return (
      <Main>
        <div className="predefined-story-container">
          <p>동화 데이터를 불러올 수 없습니다.</p>
        </div>
      </Main>
    );
  }

  return (
    <Main>
      <div className="predefined-story-container">
        <div className="predefined-image-box" style={{ position: 'relative' }}>
          {isGenerating && (
            <div className="predefined-loading-overlay">
              <div className="predefined-spinner" />
            </div>
          )}
          {showImage[pageIndex] && !isGenerating && imageUrls[pageIndex] && (
            <img
              src={imageUrls[pageIndex]}
              alt={`스토리 이미지 ${pageIndex + 1}`}
              className="predefined-image"
            />
          )}
        </div>

        <div className="predefined-text-box">
          <div className="predefined-page-indicator">
            {pageIndex + 1} / {storyList.length}
          </div>
          <p className="predefined-text">{displayedText}</p>

          <div className="predefined-button-row">
            <button
              className="predefined-nav-btn"
              onClick={handlePrev}
              disabled={pageIndex === 0}
            >
              이전
            </button>
            <button
              className="predefined-nav-btn"
              onClick={handleGenerateImage}
              disabled={isGenerating || showImage[pageIndex]}
            >
              그림 생성
            </button>
            {pageIndex === midPart.length - 1 && secondHalf.length === 0 ? (
              <button className="predefined-nav-btn" onClick={handleGoToSecondStory}>
                이어서 만들기
              </button>
            ) : (
              <button className="predefined-nav-btn" onClick={handleNext}>
                다음
              </button>
            )}
          </div>
        </div>
      </div>

      {showModal && (
        <div className="predefined-modal-overlay">
          <div className="predefined-modal-content">
            <p>동화가 끝났어요! 다음으로 무엇을 할까요?</p>
            <div className="predefined-modal-buttons">
              <button onClick={handleRestart}>다시 보기</button>
              <button onClick={handleGoToQuiz}>퀴즈 쏙!쏙!</button>
            </div>
          </div>
        </div>
      )}
    </Main>
  );
}

export default PredefinedStoryPage;
