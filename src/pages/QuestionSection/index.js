import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Main from '../../components/Main';
import './QuestionSection.css';

const enumMap = {
  character: {
    '토끼': 'RABBIT', '강아지': 'DOG', '고양이': 'CAT', '친구': 'FRIEND',
    '선생님': 'TEACHER', '엄마': 'MOM', '아기 곰': 'BABY_BEAR', '공주님': 'PRINCESS',
    '로봇': 'ROBOT', '괴물': 'MONSTER', '마법사': 'WIZARD', '오이': 'CUCUMBER',
    '요리사': 'CHEF', '고래': 'WHALE', '거북이': 'TURTLE', '해님': 'SUN',
    '구름 요정': 'CLOUD_FAIRY', '자동차': 'CAR', '도깨비': 'DOKKAEBI', '유령 친구': 'GHOST_FRIEND'
  },
  location: {
    '우리 집': 'HOME', '학교': 'SCHOOL', '놀이터': 'PLAYGROUND', '병원': 'HOSPITAL',
    '유치원 교실': 'KINDERGARTEN_CLASSROOM', '바닷가': 'BEACH', '숲속': 'FOREST', '하늘 위': 'SKY',
    '동물원': 'ZOO', '장난감 가게': 'TOY_STORE', '마트': 'SUPERMARKET', '꿈나라': 'DREAMLAND',
    '성 안': 'CASTLE', '동굴': 'CAVE', '공룡나라': 'DINOSAUR_LAND', '빵집': 'BAKERY',
    '수영장': 'SWIMMING_POOL', '놀이공원': 'AMUSEMENT_PARK', '마법 나라': 'MAGIC_LAND', '버스 안': 'INSIDE_BUS'
  },
  subject: {
    '친구와 놀러 가는 이야기': 'HANGING_OUT_WITH_FRIEND', '동물이 모험하는 이야기': 'ANIMAL_ADVENTURE',
    '선물을 찾는 이야기': 'SEARCHING_FOR_PRESENT', '마법을 쓰는 이야기': 'USING_MAGIC',
    '생일 파티 이야기': 'BIRTHDAY_PARTY', '무서운 괴물과 만나는 이야기': 'MEETING_SCARY_MONSTER',
    '길을 잃고 돌아오는 이야기': 'LOST_AND_FOUND_WAY', '비 오는 날 이야기': 'RAINY_DAY',
    '숨은 보물을 찾는 이야기': 'FINDING_HIDDEN_TREASURE', '친구랑 싸우고 화해하는 이야기': 'FIGHT_AND_MAKE_UP_WITH_FRIEND',
    '잃어버린 장난감을 찾는 이야기': 'FINDING_LOST_TOY', '꿈속 세상 이야기': 'DREAM_WORLD',
    '동물 병원 이야기': 'ANIMAL_HOSPITAL', '학교에서 있었던 이야기': 'AT_SCHOOL',
    '신기한 물건을 발견한 이야기': 'DISCOVERING_STRANGE_OBJECT', '미끄럼틀에서 생긴 이야기': 'SLIDE_ADVENTURE',
    '마트에 간 이야기': 'TRIP_TO_SUPERMARKET', '피자를 만들던 이야기': 'MAKING_PIZZA',
    '아기 동물을 돌보는 이야기': 'CARING_BABY_ANIMAL', '소풍 가는 이야기': 'GOING_ON_FIELD_TRIP'
  }
};

const questions = [
  { title: '어떤 이야기를 만들고 싶나요?', options: Object.keys(enumMap.subject) },
  { title: '이야기는 어디에서 일어나나요?', options: Object.keys(enumMap.location) },
  { title: '어떤 등장인물이 있나요?', options: Object.keys(enumMap.character) }
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
    setShuffledChoices(shuffle(current.options).slice(0, 3));
  }, [step]);

  const handleChoice = (choice) => {
    setAnswers((prev) => ({ ...prev, [step]: choice }));
  };

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      const subject = answers[0];
      const location = answers[1];
      const character = answers[2];

      const requestBody = {
        fairyTaleSubject: enumMap.subject[subject] || 'ETC',
        fairyTaleLocation: enumMap.location[location] || 'ETC',
        fairyTaleCharacter: enumMap.character[character] || 'ETC',
        otherSubject: enumMap.subject[subject] === 'ETC' ? subject : '',
        otherLocation: enumMap.location[location] === 'ETC' ? location : '',
        otherCharacter: enumMap.character[character] === 'ETC' ? character : ''
      };

      navigate('/creating', { state: requestBody });
    }
  };

  const handlePrev = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <Main>
      <div className="question-section">
        <div className="question-box">
          <div className="circle-deco top" />
          <div className="question-title">{current.title}</div>
          {shuffledChoices.map((c) => (
            <button
              key={c}
              className="choice-btn"
              onClick={() => handleChoice(c)}
              style={{
                borderColor: answers[step] === c ? '#F6DF7B' : '#222',
                background: answers[step] === c ? '#F6DF7B' : '#fff'
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
            <button className="prev-btn" onClick={handlePrev} disabled={step === 0}>이전</button>
            <button className="next-btn" onClick={handleNext} disabled={!answers[step]}>
              {step < questions.length - 1 ? '다음' : '완료'}
            </button>
          </div>
          <div className="circle-deco bottom" />
        </div>
      </div>
    </Main>
  );
}

export default QuestionSectionPage;