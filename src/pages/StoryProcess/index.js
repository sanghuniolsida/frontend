import React, { useState, useEffect } from 'react';
import Main from '../../components/Main';
import './storyprocess.css';
import { useNavigate } from 'react-router-dom';

function StoryProcess() {
  const navigate = useNavigate();
  const stored = localStorage.getItem('midPartStory');
  const parsed = stored ? JSON.parse(stored) : null;

  const storyList = parsed?.midPartFairyTaleStory || [];
  const secondHalf = parsed?.secondHalfFairyTaleStory || [];
  const hasSecondHalf = secondHalf.length > 0;

  const fullStory = hasSecondHalf ? [...storyList, ...secondHalf] : storyList;
  const [pageIndex, setPageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [imageUrls, setImageUrls] = useState(parsed?.imageUrls || [parsed?.imageUrl || '/default-image.png']);
  const [isGenerating, setIsGenerating] = useState(false);

  const currentText = fullStory[pageIndex];

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

  const handleGenerateImage = async () => {
    const token = localStorage.getItem('token');
    const fairyTaleId = parsed?.midPartFairyTaleId;

    if (!fairyTaleId || !token) return;

    const isSecondHalfPage = pageIndex >= storyList.length;
    const imagePageNum = isSecondHalfPage
      ? pageIndex - storyList.length
      : pageIndex + 1;

    const url = isSecondHalfPage
      ? `https://story-sok-sok.kro.kr/api/fairy-tale/second-half/${fairyTaleId}/${imagePageNum}`
      : `https://story-sok-sok.kro.kr/api/fairy-tale/${fairyTaleId}/${imagePageNum}`;

    try {
      setIsGenerating(true);
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error('이미지 생성 실패');

      const data = await res.json();
      const newImageUrls = [...imageUrls];
      newImageUrls[pageIndex] = data.imageUrl;
      setImageUrls(newImageUrls);
      parsed.imageUrls = newImageUrls;
      localStorage.setItem('midPartStory', JSON.stringify(parsed));
    } catch (err) {
      console.error(err);
      alert('이미지 생성 중 오류가 발생했습니다.');
    } finally {
      setIsGenerating(false);
    }
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
        <div className="story-image-box" style={{ position: 'relative' }}>
          <img
            src={imageUrls[pageIndex] || '/default-image.png'}
            alt={`스토리 이미지 ${pageIndex + 1}`}
            className="story-image"
          />
          {isGenerating && (
            <div className="loading-overlay">
              <div className="spinner" />
            </div>
          )}
        </div>
        <div className="story-text-box">
          <div className="page-indicator">{pageIndex + 1} / {fullStory.length}</div>
          <p className="story-text">{displayedText}</p>

          <div className="story-button-row">
            <button className="story-nav-btn" onClick={handlePrev} disabled={pageIndex === 0}>이전</button>
            <button className="story-nav-btn" onClick={handleGenerateImage} disabled={isGenerating}>그림 생성</button>
            {pageIndex === 3 && !hasSecondHalf ? (
              <button className="story-nav-btn" onClick={handleGoToSecondStory}>이어서 만들기</button>
            ) : (
              <button className="story-nav-btn" onClick={handleNext}>다음</button>
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
