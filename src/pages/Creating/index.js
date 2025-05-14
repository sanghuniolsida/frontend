import React from 'react';
import Header from '../../components/Header';
import '../../components/Main.css';
import './Creating.css';

function CreatingPage() {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="main-scroll">
        <div className="creating-page">
          <div className="creating-content">
            <div className="icon-circle">
              <img
                src="/Creating.png"
                alt="동화 제작 중 아이콘"
                className="creating-icon"
              />
            </div>
            <div className="creating-text">
              동화 제작중
              <span className="dot dot1">.</span>
              <span className="dot dot2">.</span>
              <span className="dot dot3">.</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CreatingPage;
