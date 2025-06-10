import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Main from '../../components/Main';
import './PreSecondPage.css'; // 독립된 스타일 적용

function PreSecondPage() {
  const [selected, setSelected] = useState('');
  const [choices, setChoices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem('midPartStory');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const options = parsed?.secondHalfFairyTaleStory || [];
        setChoices(options);
      } catch (e) {
        console.error('JSON parsing error:', e);
      }
    }
  }, []);

  const handleChoice = (choice) => {
    setSelected(choice);
  };

  const handleNext = () => {
    localStorage.setItem('secondHalfSubject', selected);
    navigate('/precreating');
  };

  return (
    <Main>
      <div className="presecond-question-section">
        <div className="presecond-question-box">
          <div className="presecond-circle-deco top" />
          <div className="presecond-question-title">이야기가 어떻게 전개되면 좋을까요?</div>

          {choices.map((choice, idx) => (
            <button
              key={idx}
              className="presecond-choice-btn"
              onClick={() => handleChoice(choice)}
              style={{
                borderColor: selected === choice ? '#F6DF7B' : '#222',
                background: selected === choice ? '#F6DF7B' : '#fff',
              }}
            >
              {choice}
            </button>
          ))}

          <div className="presecond-button-row">
            <button
              className="presecond-next-btn"
              onClick={handleNext}
              disabled={!selected}
            >
              완료
            </button>
          </div>
          <div className="presecond-circle-deco bottom" />
        </div>
      </div>
    </Main>
  );
}

export default PreSecondPage;
