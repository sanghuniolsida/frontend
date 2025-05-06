import React from 'react';
import Main from '../../components/Main';
import './home.css'; 

function Home() {
  return (
    <Main>
      <div className="home-container">
        {/* 상단 배너 */}
        <div className="banner-section">
          <div className="banner-image"></div>
        </div>

        <div className="card-section"> 
          <div className="card-row">
            <div className="card-box"></div>
            <div className="card-box"></div>
            <div className="card-box"></div>
          </div>
        </div>

        <div className="infocard-section">
          {/* 설명 카드들 */}
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
            <img src="/growsoksok.png" alt="성장 쏙쏙" />
            <div className="text">
              <strong>성장 쏙! 쏙!</strong>
              <p>퀴즈를 통한 나의 성장 과정을 쏙!쏙!에서 한눈에 확인!</p>
            </div>
          </div>
        </div>
        </div> 
        
        {/* 버튼 */}
        <div className="create-button-wrapper">
          <button className="create-button">동화 생성하기</button>
        </div>
      </div>
    </Main>
  );
}

export default Home;
