import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Main from '../../components/Main';
import '../../components/Main.css';
import '../Creating/Creating.css';

function PreCreatingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/predefined');
    }, 12000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="app-wrapper">
      <Main>
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
      </Main>
    </div>
  );
}

export default PreCreatingPage;
