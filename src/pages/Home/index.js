import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Main from '../../components/Main';
import './home.css';
import { jwtDecode } from 'jwt-decode';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const token = query.get('accessToken');

    if (token) {
      try {
        localStorage.setItem('token', token);

        const decoded = jwtDecode(token);
        const username = decoded.memberName || decoded.username || decoded.sub;
        if (username) {
          localStorage.setItem('username', username);
        }

        // URL에 토큰 파라미터 제거
        const cleanUrl = window.location.origin + window.location.pathname;
        window.history.replaceState({}, document.title, cleanUrl);
      } catch (err) {
        alert('로그인 정보가 유효하지 않습니다.');
        navigate('/loginpage');
        return;
      }
    } else if (!localStorage.getItem('token')) {
      alert('로그인이 필요합니다.');
      navigate('/loginpage');
      return;
    }

    localStorage.removeItem('midPartStory');

  }, [navigate]);

  return (
    <Main>
      <div className="home-container">
        {/* 상단 배너 */}
        <div className="banner-section">
          <div className="banner-image">
            <img src="/storylogo.png" alt="스토리로고" className="logo-image" />
          </div>
        </div>
        <div className="infocard-section">
          <div className="info-section">
            <div className="info-card">
              <img src="/storysoksok.png" alt="이야기 쏙쏙" />
              <div className="text">
                <strong>이야기 쏙! 쏙!</strong>
                <p>내가 구성하는 나만의 동화책</p>
              </div>
            </div>

            <div className="info-card reverse">
              <img src="/quizsoksok.png" alt="퀴즈 쏙쏙" />
              <div className="text">
                <strong>퀴즈 쏙! 쏙!</strong>
                <p>동화를 이해하며 생각을 키우는 퀴즈 시간</p>
              </div>
            </div>

            <div className="info-card">
              <img src="/growsoksok.png" alt="성장 쏙쑥" />
              <div className="text">
                <strong>성장 쑥! 쑥!</strong>
                <p>퀴즈를 통한 나의 성장 과정을 쑥!쑥!에서 한눈에 확인!</p>
              </div>
            </div>
          </div>
        </div>

        {/* 버튼 */}
        <div className="create-button-wrapper">
          <button
            className="create-button"
            onClick={() => navigate('/question')}
          >
            동화 생성하기✍️
          </button>
        </div>
      </div>
    </Main>
  );
}

export default Home;
