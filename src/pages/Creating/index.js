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
      const {
        fairyTaleSubject,
        fairyTaleLocation,
        fairyTaleCharacter,
        otherSubject,
        otherLocation,
        otherCharacter,
      } = location.state || {};

      if (!fairyTaleSubject || !fairyTaleLocation || !fairyTaleCharacter) {
        alert('동화 생성 정보가 없습니다.');
        return;
      }

      try {
        const token = localStorage.getItem('token');

        // 1. 전반부 동화 생성
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
          }),
        });

        if (!res.ok) throw new Error('동화 생성 실패');

        const data = await res.json();
        const fairyTaleId = data.midPartFairyTaleId;

        // 2. 이미지 생성 (1페이지: 전반부 생성 시 받아옴, 2~4페이지: 별도 요청)
        const imageUrls = [data.imageUrl]; // 첫 번째 페이지 이미지 포함

        for (let pageNum = 2; pageNum <= 4; pageNum++) {
          const imageRes = await fetch(`https://story-sok-sok.kro.kr/api/fairy-tale/${fairyTaleId}/${pageNum}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          });

          if (!imageRes.ok) {
            const errorText = await imageRes.text();
            console.error(`페이지 ${pageNum} 이미지 생성 실패:`, errorText);
            throw new Error(`페이지 ${pageNum} 이미지 생성 실패`);
          }

          const imageData = await imageRes.json();
          imageUrls.push(imageData.imageUrl);
        }

        // 3. 이미지 URL 포함 저장 후 이동
        data.imageUrls = imageUrls;
        localStorage.setItem('midPartStory', JSON.stringify(data));
        navigate('/storyprocess');
      } catch (err) {
        console.error(err);
        alert('동화 생성 또는 이미지 생성 중 오류가 발생했습니다.');
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
