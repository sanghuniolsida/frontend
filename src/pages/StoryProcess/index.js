import React from 'react';
import Main from '../../components/Main';
import './storyprocess.css';

function StoryProcess() {
  return (
    <Main>
      <div className="story-process-container">
        <div className="story-image-box">
          {/* 여기에 나중에 API로 받아올 이미지 삽입 */}
          <img
            src="/placeholder-image.png"
            alt="동화 이미지"
            className="story-image"
          />
        </div>

        <div className="story-text-box">
          {/* 여기에 나중에 API로 받아올 동화 내용 삽입 */}
          <p className="story-text">
            옛날 옛날, 푸른 채소 나라에 오이왕자가 살고 있었어요. 오이왕자는 키가 크고 늘 웃는 얼굴이었어요.
          </p>

          <div className="story-button-row">
            <button className="story-nav-btn">이전</button>
            <button className="story-nav-btn">다음</button>
          </div>
        </div>
      </div>
    </Main>
  );
}

export default StoryProcess;
