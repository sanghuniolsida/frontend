import React from 'react';
import './login.css';

function LoginPage() {
  const handleGoogleLogin = () => {
    try {
      window.location.href = "https://story-sok-sok.kro.kr/login/oauth2/code/google";
    } catch (error) {
      console.error("구글 로그인 실패:", error.message);
      alert("구글 로그인 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="app-wrapper">
      <div className="top-section">
        <h1 className="title">이야기<br />
          <span className="drop-text">
            <span>쏙</span>
            <span>!</span>
            <span>&nbsp;</span>
            <span>쏙</span>
            <span>!</span>
          </span>
        </h1>

        <div className="logo-circle">
          <img src="/storylogo.png" alt="logo" className="logo-img" />
        </div>

        <div className="bottom-curve"></div>
      </div>

      <div className="bottom-section">
        <button className="google-login" onClick={handleGoogleLogin}>
          <img src="/googlelogo.png" alt="Google logo" className="google-icon" />
          Google로 시작하기
        </button>
      </div>
    </div>
  );
}

export default LoginPage;