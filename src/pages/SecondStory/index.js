import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Main from '../../components/Main';
import './secondstory.css';

function SecondStoryPage() {
  const [selectedEnum, setSelectedEnum] = useState('');
  const [choices, setChoices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem('midPartStory');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const original = parsed?.secondHalfRecommendStory || [];

        const enumLabels = [
          'FIRST_HALF_RECOMMEND_STORY',
          'SECOND_HALF_RECOMMEND_STORY',
          'THIRD_HALF_RECOMMEND_STORY'
        ];

        const renamed = original.map((item, index) => ({
          enum: enumLabels[index] || `RECOMMEND_STORY_${index}`,
          text: item.text || item // 기존 형식 호환
        }));

        setChoices(renamed);
      } catch (e) {
        console.error('JSON 파싱 오류:', e);
      }
    }
  }, []);


  const handleChoice = (selected) => {
    setSelectedEnum(selected.enum);
  };

  const handleNext = () => {
    localStorage.setItem('secondHalfSubject', selectedEnum);
    navigate('/creating');
  };

  return (
    <Main>
      <div className="second-question-section">
        <div className="second-question-box">
          <div className="second-circle-deco top" />
          <div className="second-question-title">이야기가 어떻게 전개되면 좋을까요?</div>

          {choices.map((choice) => (
            <button
              key={choice.enum}
              className="second-choice-btn"
              onClick={() => handleChoice(choice)}
              style={{
                borderColor: selectedEnum === choice.enum ? '#F6DF7B' : '#222',
                background: selectedEnum === choice.enum ? '#F6DF7B' : '#fff'
              }}
            >
              {choice.text}
            </button>
          ))}

          <div className="second-button-row">
            <button
              className="second-next-btn"
              onClick={handleNext}
              disabled={!selectedEnum}
            >
              완료
            </button>
          </div>
          <div className="second-circle-deco bottom" />
        </div>
      </div>
    </Main>
  );
}

export default SecondStoryPage;
