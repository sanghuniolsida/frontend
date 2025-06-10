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
      const token = localStorage.getItem('token');
      const secondHalfSubject = localStorage.getItem('secondHalfSubject');
      const otherSecondHalf = localStorage.getItem('secondHalfEtc');
      const midPartRaw = localStorage.getItem('midPartStory');

      const isSecondHalfGeneration =
        !location.state && secondHalfSubject && midPartRaw;

      try {
        if (isSecondHalfGeneration) {
          // ――――― 후반부 동화 생성 ―――――
          const midPart = JSON.parse(midPartRaw);
          const fairyTaleId = midPart.midPartFairyTaleId;

          const res = await fetch('https://story-sok-sok.kro.kr/api/fairy-tale/second-half', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              secondHalfRecommendStory: secondHalfSubject.trim(),
              midPartFairyTaleId: fairyTaleId,
              otherRecommendStory: secondHalfSubject === 'ETC' ? otherSecondHalf : 'string',
            }),
          });

          if (!res.ok) throw new Error('후반부 동화 생성 실패');
          const data = await res.json();

          midPart.secondHalfFairyTaleStory = data.secondHalfFairyTaleStory;
          // 이미지 생성은 storyprocess에서 개별 호출
          localStorage.setItem('midPartStory', JSON.stringify(midPart));
          navigate('/storyprocess');
        } else {
          // ――――― 전반부 동화 생성 ―――――
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

          if (!res.ok) throw new Error('전반부 동화 생성 실패');
          const data = await res.json();
          const fairyTaleId = data.midPartFairyTaleId;

          if (Array.isArray(data.secondHalfRecommendStory)) {
            data.secondHalfRecommendStory = data.secondHalfRecommendStory.map((text, index) => ({
              enum: `SECOND_HALF_RECOMMEND_${index}`,
              text: text.trim(),
            }));
          }

          data.imageUrls = [data.imageUrl]; // 이미지 없이 초기화, 이후 개별 호출
          localStorage.setItem('midPartStory', JSON.stringify(data));
          navigate('/storyprocess');
        }
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