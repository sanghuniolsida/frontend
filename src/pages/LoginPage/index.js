import React from 'react';
import './login.css';

function LoginPage() {
  return (
    <div className="app-wrapper">
      <div className="top-section">
        <h1 className="title">이야기<br />쏙! 쏙!</h1>

        <div className="logo-circle">
          <img src="/storylogo.png" alt="logo" className="logo-img" />
        </div>

        <div className="bottom-curve"></div>
      </div>

      <div className="bottom-section">
        {/* 예: 구글 로그인 버튼 */}
        <button className="google-login">
            <img src="/googlelogo.png" alt="Google logo" className="google-icon" />
            Google로 시작하기
            </button>
      </div>
    </div>
  );
}

export default LoginPage;
