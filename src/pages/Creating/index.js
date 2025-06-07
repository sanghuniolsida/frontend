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

          console.log('후반부 동화 생성 요청 파라미터:', {
            secondHalfRecommendStory: secondHalfSubject,
            midPartFairyTaleId: fairyTaleId,
            otherRecommendStory: secondHalfSubject === 'ETC' ? otherSecondHalf : 'string',
          });
          console.log('Token:', token);

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
          midPart.imageUrls.push(data.imageUrl); // 5페이지 이미지 추가
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

          const imageUrls = [data.imageUrl];
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

          if (Array.isArray(data.secondHalfRecommendStory)) {
            data.secondHalfRecommendStory = data.secondHalfRecommendStory.map((text, index) => ({
              enum: `SECOND_HALF_RECOMMEND_${index}`,
              text: text.trim(),
            }));
          }

          data.imageUrls = imageUrls;
          localStorage.setItem('midPartStory', JSON.stringify(data));
          navigate('/storyprocess');
        }
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
