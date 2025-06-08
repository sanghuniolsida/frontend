import React, { useState } from 'react';
import Main from '../../components/Main';
import './quiz.css';
import { useLocation } from 'react-router-dom';

function Quiz() {
  const location = useLocation();
  const selectedTitle = location.state?.title || '퍼피와 키티';

  const quizData = {
    '퍼피와 키티': {
      images: [
        '/dogcatstory/dogcat1.png',
        '/dogcatstory/dogcat2.png',
        '/dogcatstory/dogcat3.png',
        '/dogcatstory/dogcat4.png',
        '/dogcatstory/dogcat5.png',
        '/dogcatstory/dogcat6.png',
        '/dogcatstory/dogcat7.png',
      ],
      questions: [
        {
          question: 'Q1. 퍼피와 키티가 처음 놀이터에서 만나서 한 행동은 무엇이었나요?', //이해력
          options: [
            '서로를 보고 도망쳤어요',
            '누가 더 멋진지 경쟁하려고 했어요', //✅
            '인사를 하고 헤어졌어요',
            '함께 숨바꼭질을 했어요'
          ]
        },
        {
          question: 'Q2. 퍼피와 키티가 싸우다가 어떤 일이 일어났나요?', //기억력
          options: [
            '퍼피와 키티가 울기 시작했어요',
            '누군가 와서 말렸어요',
            '퍼피는 넘어지고 키티는 땅에 떨어졌어요', //✅
            '퍼피가 집으로 돌아갔어요'
          ]
        },
        {
          question: 'Q3. 퍼피는 어떻게 자신이 멋지다고 보여주려고 했나요?', //주의 집중
          options: [
            '크게 짖었어요',
            '멋지게 점프하며 달렸어요', //✅
            '나무 위로 올라갔어요',
            '공을 던졌어요'
          ]
        },
        {
          question: 'Q4. 퍼피와 키티가 마지막에 어떻게 되었나요?', //언어추론
          options: [
            '끝까지 말도 안 하고 헤어졌어요',
            '둘 다 집으로 돌아갔어요',
            '서로 화해하고 친구가 되었어요', //✅
            '선생님께 혼났어요'
          ]
        }
      ]
    },
    '루루와 웃는 구름': {
      images: [
        '/rabitcloud/rabitcloud1.png',
        '/rabitcloud/rabitcloud2.png',
        '/rabitcloud/rabitcloud3.png',
        '/rabitcloud/rabitcloud4.png',
        '/rabitcloud/rabitcloud5.png',
        '/rabitcloud/rabitcloud6.png',
        '/rabitcloud/rabitcloud7.png',
        '/rabitcloud/rabitcloud8.png',
      ],
      questions: [
        {
          question: 'Q1. 이 동화에서 루루는 어떤 행동으로 구름을 도와줬나요?', //이해력
          options: [
            '구름을 혼냈어요',
            '따뜻한 미소와 말로 다가갔어요', //✅
            '구름에게 등을 돌렸어요',
            '당근을 던졌어요'
          ]
        },
        {
          question: 'Q2. 구름이 웃은 뒤 어떤 일이 일어났나요?', //기억력
          options: [
            '비가 내렸어요',
            '구름이 사라졌어요',
            '무지개가 하늘에 생겼어요', //✅
            '루루가 집에 갔어요'
          ]
        },
        {
          question: 'Q3. 루루는 어떤 색 망토를 두르고 있었나요?', //주의 집중
          options: [
            '파란색',
            '빨간색', //✅
            '노란색',
            '초록색'
          ]
        },
        {
          question: 'Q4. 구름이 처음에 슬펐던 이유는 무엇인가요?', //언어추론
          options: [
            '바람이 불어서요',
            '당근을 못 먹어서요',
            '친구가 없어서 외로웠기 때문일 수 있어요', //✅
            '하늘이 너무 더워서요'
          ]
        }
      ]
    },
    '화가 난 곰돌이': {
      images: [
        '/bear/bear1.png',
        '/bear/bear2.png',
        '/bear/bear3.png',
        '/bear/bear4.png',
        '/bear/bear5.png',
        '/bear/bear6.png',
        '/bear/bear7.png',
        '/bear/bear8.png',
      ],
      questions: [
        {
          question: 'Q1. 이 이야기에서 무무는 왜 친구에게 미안한 마음이 들었을까요?', //이해력
          options: [
            '삽을 잃어버려서요',
            '친구를 놀래켰기 때문이에요', //✅
            '꽃을 못 심어서요',
            '혼자 있어서요'
          ]
        },
        {
          question: 'Q2. 무무는 무엇을 하다가 화가 났나요?', //기억력
          options: [
            '밥을 먹다가요',
            '나무에 올라가다가요',
            '나무삽을 떨어뜨려서요', //✅
            '꽃을 따다가요'
          ]
        },
        {
          question: 'Q3. 무무에게 먼저 다가가 말을 건 친구의 이름은 누구였나요?', //주의 집중
          options: [
            '레이',
            '피피', //✅
            '키티',
            '토토'
          ]
        },
        {
          question: 'Q4. 무무는 마지막에 어떤 마음이 되었나요?', //언어추론
          options: [
            '더 화가 났어요',
            '슬퍼졌어요',
            '마음이 가벼워졌어요', //✅
            '마음이 복잡해졌어요'
          ]
        }
      ]
    },
    '아기 달팽이 달록': {
      images: [
        '/snail/snail1.png',
        '/snail/snail2.png',
        '/snail/snail3.png',
        '/snail/snail4.png',
        '/snail/snail5.png',
        '/snail/snail6.png',
        '/snail/snail7.png',
        '/snail/snail8.png',
      ],
      questions: [
        {
          question: 'Q1. 달록은 어떤 친구를 만나 함께 길을 걸었나요?', //이해력
          options: [
            '토끼',
            '새', //✅
            '다람쥐',
            '곰'
          ]
        },
        {
          question: 'Q2. 새는 왜 덤불 속에 숨어 있었나요?', //기억력
          options: [
            '달록을 피하려고',
            '길을 잃어서',
            '날개가 아파서', //✅
            '잠을 자려고'
          ]
        },
        {
          question: 'Q3. 달록과 새가 마주했을 때, 새의 날개에는 무엇이 있었나요?', //주의 집중
          options: [
            '붕대',
            '나뭇잎', //✅
            '깃털 장식',
            '지팡이'
          ]
        },
        {
          question: 'Q4. 마지막에 달록과 새가 함께 웃었던 이유는 무엇일까요?', //언어추론
          options: [
            '숲에서 맛있는 걸 찾았기 때문에',
            '빨리 갈 수 있었기 때문에',
            '함께 속도가 맞는 친구가 되었기 때문에', //✅
            '다른 동물들이 박수를 쳤기 때문에'
          ]
        }
      ]
    },
  };

  const quiz = quizData[selectedTitle];
  const [translateX, setTranslateX] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const slideStep = 120;
  const imageWidth = 340;

  if (!quiz) {
    return (
      <Main>
        <div className="quiz-page">
          <p>해당 동화의 퀴즈가 없습니다.</p>
        </div>
      </Main>
    );
  }

  const { images, questions } = quiz;
  const maxTranslateX = -(images.length - 1) * imageWidth;

  const handleSlidePrev = () => {
    setTranslateX((prev) => Math.min(prev + slideStep, 0));
  };

  const handleSlideNext = () => {
    setTranslateX((prev) => Math.max(prev - slideStep, maxTranslateX));
  };

  const handleQuestionPrev = () => {
    setCurrentQuestionIndex((prev) => (prev === 0 ? questions.length - 1 : prev - 1));
  };

  const handleQuestionNext = () => {
    setCurrentQuestionIndex((prev) => (prev === questions.length - 1 ? 0 : prev + 1));
  };

  return (
    <Main>
      <div className="quiz-page">
        <div className="quiz-images">
          <div
            className="quiz-images-wrapper"
            style={{
              transform: `translateX(${translateX}px)`,
              transition: 'transform 0.3s ease-in-out',
              width: `${images.length * imageWidth}px`
            }}
          >
            {images.map((image, index) => (
              <div key={index} className="quiz-image-container">
                <img src={image} alt={`장면${index + 1}`} />
              </div>
            ))}
          </div>
          <div className="quiz-slide-buttons">
            <button onClick={handleSlidePrev} disabled={translateX === 0}>←</button>
            <button onClick={handleSlideNext} disabled={translateX === maxTranslateX}>→</button>
          </div>
        </div>

        <div className="quiz-question-section">
          <div className="quiz-number">
            {questions.map((_, i) => (
              <span key={i} className={currentQuestionIndex === i ? 'active' : ''}>{i + 1}</span>
            ))}
          </div>

          <div className="quiz-question-box">
            <p>{questions[currentQuestionIndex].question}</p>
          </div>

          <div className="quiz-options">
            {questions[currentQuestionIndex].options.map((option, i) => (
              <button key={i}>{option}</button>
            ))}
          </div>

          <div className="quiz-nav-buttons">
            <button onClick={handleQuestionPrev}>이전</button>
            <button onClick={handleQuestionNext}>다음</button>
          </div>
        </div>
      </div>
    </Main>
  );
}

export default Quiz;
