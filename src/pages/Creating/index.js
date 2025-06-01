import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Main from '../../components/Main';
import '../../components/Main.css';
import './Creating.css';

function CreatingPage() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchStory = async () => {
      const { fairyTaleSubject, fairyTaleLocation, fairyTaleCharacter, otherSubject, otherLocation, otherCharacter } = location.state || {};
      if (!fairyTaleSubject || !fairyTaleLocation || !fairyTaleCharacter) {
        alert('동화 생성 정보가 없습니다.');
        return;
      }

      try {
        const token = localStorage.getItem('token');
        const res = await fetch('https://story-sok-sok.kro.kr/api/fairy-tale/first', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            fairyTaleSubject,
            fairyTaleLocation,
            fairyTaleCharacter,
            otherSubject,
            otherLocation,
            otherCharacter,
          })
        });

        if (!res.ok) throw new Error('동화 생성 실패');

        const data = await res.json();
        localStorage.setItem('midPartStory', JSON.stringify(data));
        navigate('/storyprocess');
      } catch (err) {
        console.error(err);
        alert('동화 생성 중 오류가 발생했습니다.');
      }
    };

    fetchStory();
  }, [navigate, location]);

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

export default CreatingPage;