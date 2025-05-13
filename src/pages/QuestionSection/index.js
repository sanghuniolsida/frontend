import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Main from '../../components/Main';
import './QuestionSection.css';

const questions = [
  { title: '이야기는 어디에서 일어나나요?', choices: ['학교', '집', '공원'] },
  { title: '주인공의 이름은 무엇인가요?', choices: ['토끼', '곰', '고양이'] },
  { title: '이야기의 분위기는 어떤가요?', choices: ['기쁨', '슬픔', '흥분'] },
];

function QuestionSectionPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();
  const current = questions[step];

  const handleChoice = (choice) => {
    setAnswers((prev) => ({ ...prev, [step]: choice }));
  };

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      navigate('/quiz');
    }
  };

  return (
    <Main>
      <div className="question-section">
        <div className="question-box">
          <div className="question-title">{current.title}</div>
          {current.choices.map((c) => (
            <button
              key={c}
              className="choice-btn"
              onClick={() => handleChoice(c)}
              style={{
                borderColor: answers[step] === c ? '#F6DF7B' : '#222',
                background: answers[step] === c ? '#F6DF7B' : '#fff',
              }}
            >
              {c}
            </button>
          ))}
          <input
            className="custom-input"
            placeholder="직접 적어보세요!"
            value={answers[step] || ''}
            onChange={(e) => handleChoice(e.target.value)}
          />
          <button
            className="next-btn"
            disabled={answers[step] == null}
            onClick={handleNext}
          >
            {step < questions.length - 1 ? '다음' : '완료'}
          </button>
        </div>
      </div>
    </Main>
  );
}

export default QuestionSectionPage;
