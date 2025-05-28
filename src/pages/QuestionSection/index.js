import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Main from '../../components/Main';
import './QuestionSection.css';

const questions = [
  {
    title: '어떤 이야기를 만들고 싶나요?',
    options: [
      '친구와 놀러 가는 이야기', '동물이 모험하는 이야기', '선물을 찾는 이야기',
      '마법을 쓰는 이야기', '생일 파티 이야기', '용사와 만나는 이야기',
      '길을 잃고 돌아오는 이야기', '비 오는 날 이야기', '숨은 보물을 찾는 이야기',
      '친구랑 화해하는 이야기', '잃어버린 물건 찾는 이야기', '꿈속 세상 이야기',
      '동물 병원 이야기', '학교에서 있었던 이야기',
      '미끄럼틀에서 생긴 이야기', '마트에 간 이야기', '피자를 만들던 이야기',
      '아기 동물을 돌보는 이야기', '소풍 가는 이야기',
    ]
  },
  {
    title: '이야기는 어디에서 일어나나요?',
    options: [
      '우리 집', '학교', '놀이터', '병원', '유치원 교실', '바닷가',
      '숲속', '하늘 위', '동물원', '장난감 가게', '마트', '꿈나라',
      '산', '동굴', '과자 마을', '빵집', '수영장', '놀이공원',
      '마법 나라', '버스 안',
    ]
  },
  {
    title: '어떤 등장인물이 있나요?',
    options: [
      '토끼', '강아지', '고양이', '친구', '선생님', '엄마',
      '아기 곰', '공주님', '로봇', '돼지', '친구', '오이',
      '요리사', '고래', '거북이', '별', '구름 요정', '자동차',
      '도깨비', '기차차',
    ]
  }
];

function QuestionSectionPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [shuffledChoices, setShuffledChoices] = useState([]);
  const navigate = useNavigate();

  const current = questions[step];

  useEffect(() => {
    const shuffle = (array) => {
      const copy = [...array];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    };

    const sampled = shuffle(current.options).slice(0, 3);
    setShuffledChoices(sampled);
  }, [step]);

  const handleChoice = (choice) => {
    setAnswers((prev) => ({ ...prev, [step]: choice }));
  };

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      navigate('/creating');
    }
  };

  const handlePrev = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

   return (
    <Main>
      <div className="question-section">
        <div className="question-box">
          <div className="question-title">{current.title}</div>

          {shuffledChoices.map((c) => (
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

          <div className="button-row">
            <button
              className="prev-btn"
              onClick={handlePrev}
              disabled={step === 0}
            >
              이전
            </button>
            <button
              className="next-btn"
              onClick={handleNext}
              disabled={!answers[step]}
            >
              {step < questions.length - 1 ? '다음' : '완료'}
            </button>
          </div>
        </div>
      </div>
    </Main>
  );
}

export default QuestionSectionPage;
