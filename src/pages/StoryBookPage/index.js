import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';
import './storybook.css';

function StoryBookPage() {
  const navigate = useNavigate();
  // 추후 API 연동을 위해 placeholder 변수 사용
  const imageUrl = ''; // 동화 이미지 URL
  const textContent = ''; // 동화 본문 텍스트

  return (
    <div className="app-wrapper">
      <Header />
      <div className="storybook-main">
        <div className="storybook-container">
          {/* 이미지 뷰어 영역 */}
          <div className="storybook-image">
            <img src={imageUrl} alt="스토리 이미지" />
          </div>
          {/* 텍스트 영역 (버튼 포함) */}
          <div className="storybook-text">
            <p>{textContent}</p>
            <div className="storybook-nav">
              <button className="nav-btn prev" onClick={() => navigate(-1)}>
                이전
              </button>
              <button
                className="nav-btn quiz"
                onClick={() => navigate('/quiz')}
              >
                퀴즈 풀기
              </button>
              <button className="nav-btn next" onClick={() => navigate(1)}>
                다음
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default StoryBookPage;
