import React, { useState } from 'react';
import Main from '../../components/Main';
import './quiz.css';
import { useLocation, useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';

function Quiz() {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedTitle = location.state?.title;

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
          question: '퀴즈1. 퍼피와 키티가 처음 놀이터에서 만나서 한 행동은 무엇이었나요?', //이해력
          category: '이해력',
          options: [
            '서로를 보고 도망쳤어요',
            '누가 더 멋진지 경쟁하려고 했어요', //✅
            '인사를 하고 헤어졌어요',
            '함께 숨바꼭질을 했어요'
          ],
          answerIndex: 1
        },
        {
          question: '퀴즈2. 퍼피와 키티가 싸우다가 어떤 일이 일어났나요?', //기억력
          category: '기억력',
          options: [
            '퍼피와 키티가 울기 시작했어요',
            '누군가 와서 말렸어요',
            '퍼피는 넘어지고 키티는 땅에 떨어졌어요', //✅
            '퍼피가 집으로 돌아갔어요'
          ],
          answerIndex: 2
        },
        {
          question: '퀴즈3. 퍼피는 어떻게 자신이 멋지다고 보여주려고 했나요?', //주의 집중
          category: '주의 집중력',
          options: [
            '크게 짖었어요',
            '멋지게 점프하며 달렸어요', //✅
            '나무 위로 올라갔어요',
            '공을 던졌어요'
          ],
          answerIndex: 1
        },
        {
          question: '퀴즈4. 퍼피와 키티가 마지막에 어떻게 되었나요?', //언어추론
          category: '언어 추론력',
          options: [
            '끝까지 말도 안 하고 헤어졌어요',
            '둘 다 집으로 돌아갔어요',
            '서로 화해하고 친구가 되었어요', //✅
            '선생님께 혼났어요'
          ],
          answerIndex: 2
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
          question: '퀴즈1. 이 동화에서 루루는 어떤 행동으로 구름을 도와줬나요?', //이해력
          category: '이해력',
          options: [
            '구름을 혼냈어요',
            '따뜻한 미소와 말로 다가갔어요', //✅
            '구름에게 등을 돌렸어요',
            '당근을 던졌어요'
          ],
          answerIndex: 1
        },
        {
          question: '퀴즈2. 구름이 웃은 뒤 어떤 일이 일어났나요?', //기억력
          category: '기억력',
          options: [
            '비가 내렸어요',
            '구름이 사라졌어요',
            '무지개가 하늘에 생겼어요', //✅
            '루루가 집에 갔어요'
          ],
          answerIndex: 2
        },
        {
          question: '퀴즈3. 루루는 어떤 색 망토를 두르고 있었나요?', //주의 집중
          category: '주의 집중력',
          options: [
            '파란색',
            '빨간색', //✅
            '노란색',
            '초록색'
          ],
          answerIndex: 1
        },
        {
          question: '퀴즈4. 구름이 처음에 슬펐던 이유는 무엇인가요?', //언어추론
          category: '언어 추론력',
          options: [
            '바람이 불어서요',
            '당근을 못 먹어서요',
            '친구가 없어서 외로웠기 때문일 수 있어요', //✅
            '하늘이 너무 더워서요'
          ],
          answerIndex: 2
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
          question: '퀴즈1. 이 이야기에서 무무는 왜 친구에게 미안한 마음이 들었을까요?', //이해력
          category: '이해력',
          options: [
            '삽을 잃어버려서요',
            '친구를 놀래켰기 때문이에요', //✅
            '꽃을 못 심어서요',
            '혼자 있어서요'
          ],
          answerIndex: 1
        },
        {
          question: '퀴즈2. 무무는 무엇을 하다가 화가 났나요?', //기억력
          category: '기억력',
          options: [
            '밥을 먹다가요',
            '나무에 올라가다가요',
            '나무삽을 떨어뜨려서요', //✅
            '꽃을 따다가요'
          ],
          answerIndex: 2
        },
        {
          question: '퀴즈3. 무무에게 먼저 다가가 말을 건 친구의 이름은 누구였나요?', //주의 집중
          category: '주의 집중력',
          options: [
            '레이',
            '피피', //✅
            '키티',
            '토토'
          ],
          answerIndex: 1
        },
        {
          question: '퀴즈4. 무무는 마지막에 어떤 마음이 되었나요?', //언어추론
          category: '언어 추론력',
          options: [
            '더 화가 났어요',
            '슬퍼졌어요',
            '마음이 가벼워졌어요', //✅
            '마음이 복잡해졌어요'
          ],
          answerIndex: 2
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
          question: '퀴즈1. 달록은 어떤 친구를 만나 함께 길을 걸었나요?', //이해력
          category: '이해력',
          options: [
            '토끼',
            '새', //✅
            '다람쥐',
            '곰'
          ],
          answerIndex: 1
        },
        {
          question: '퀴즈2. 새는 왜 덤불 속에 숨어 있었나요?', //기억력
          category: '기억력',
          options: [
            '달록을 피하려고',
            '길을 잃어서',
            '날개가 아파서', //✅
            '잠을 자려고'
          ],
          answerIndex: 2
        },
        {
          question: '퀴즈3. 달록과 새가 마주했을 때, 새의 날개에는 무엇이 있었나요?', //주의 집중
          category: '주의 집중력',
          options: [
            '붕대',
            '나뭇잎', //✅
            '깃털 장식',
            '지팡이'
          ],
          answerIndex: 1
        },
        {
          question: '퀴즈4. 마지막에 달록과 새가 함께 웃었던 이유는 무엇일까요?', //언어추론
          category: '언어 추론력',
          options: [
            '숲에서 맛있는 걸 찾았기 때문에',
            '빨리 갈 수 있었기 때문에',
            '함께 속도가 맞는 친구가 되었기 때문에', //✅
            '다른 동물들이 박수를 쳤기 때문에'
          ],
          answerIndex: 2
        }
      ]
    },
    '친구가 필요해': {
      images: [
        '/friendbear/friednbear1.png',
        '/friendbear/friednbear2.png',
        '/friendbear/friednbear3.png',
        '/friendbear/friednbear4.png',
        '/friendbear/friednbear5.png',
        '/friendbear/friednbear6.png',
        '/friendbear/friednbear7.png',
        '/friendbear/friednbear8.png',
      ],
      questions: [
        {
          question: '퀴즈1. 북극곰이 친구들에게 다가가지 못했던 이유는 무엇이었나요?', //이해력
          category: '이해력',
          options: [
            '곰이 너무 멀리 살았기 때문이에요.',
            '친구들이 곰을 무서워해서 도망쳤기 때문이에요.', //✅
            '친구들과 싸웠기 때문이에요.',
            '곰에게는 상처가 있었기 때문이에요.'
          ],
          answerIndex: 1
        },
        {
          question: '퀴즈2. 곰이 친구들에게 남긴 것은 무엇이었나요?', //기억력
          category: '기억력',
          options: [
            '편지',
            '코카콜라',
            '눈사람', //✅
            '선물 상자'
          ],
          answerIndex: 2
        },
        {
          question: '퀴즈3. 친구들 중에서 먼저 눈사람을 쓰다듬은 동물은 누구였나요?', //주의 집중
          category: '주의 집중력',
          options: [
            '여우',
            '다람쥐', //✅
            '토끼',
            '북극곰'
          ],
          answerIndex: 1
        },
        {
          question: '퀴즈4. “곰아, 우리랑 같이 놀자!”라는 말에서 친구들의 마음은 어땠을까요?', //언어추론
          category: '언어 추론력',
          options: [
            '곰을 놀리려는 마음이에요.',
            '곰을 쫓아내려는 마음이에요.',
            '그냥 심심해서 한 말이에요.',
            '곰과 진심으로 친구가 되고 싶은 마음이에요.', //✅
          ],
          answerIndex: 3
        }
      ]
    },
        '친구를 지킬거야': {
      images: [
        '/friendprotect/friendprotect1.png',
        '/friendprotect/friendprotect2.png',
        '/friendprotect/friendprotect3.png',
        '/friendprotect/friendprotect4.png',
        '/friendprotect/friendprotect5.png',
        '/friendprotect/friendprotect6.png',
        '/friendprotect/friendprotect7.png',
        '/friendprotect/friendprotect8.png',
      ],
      questions: [
        {
          question: '퀴즈1. 다람쥐는 왜 곰에게 “그만해!”라고 말했나요?', //이해력
          category: '이해력',
          options: [
            '곰이 미끄럼틀을 먼저 타서',
            '곰이 토끼를 무섭게 했기 때문이에요', //✅
            '곰이 다람쥐를 놀렸기 때문이에요',
            '곰이 장난감을 가져가서'
          ],
          answerIndex: 1
        },
        {
          question: '퀴즈2. 곰은 어떤 장난감을 들고 토끼에게 다가갔나요?', //기억력
          category: '기억력',
          options: [
            '나뭇가지',
            '인형',
            '공', //✅
            '당근'
          ],
          answerIndex: 2
        },
        {
          question: '퀴즈3. 곰이 토끼에게 공을 던지려 했을 때, 토끼는 어떻게 했나요?', //주의 집중
          category: '주의 집중력',
          options: [
            '뛰어서 달아났어요',
            '그네에 꼭 붙어 앉았어요', //✅
            '다람쥐에게 도와달라고 외쳤어요',
            '곰에게 달려들었어요'
          ],
          answerIndex: 1
        },
        {
          question: '퀴즈4. “우리, 서로 기분을 생각하자.”라는 말에서 다람쥐의 마음은 무엇인가요?', //언어추론
          category: '언어 추론력',
          options: [
            '모두가 기분 나빠졌으면 좋겠다는 마음',
            '더 이상 같이 놀지 말자는 마음',
            '곰을 혼내주려는 마음',
            '서로 이해하고 배려하자는 마음', //✅
          ],
          answerIndex: 3
        }
      ]
    },
        '달빛을 나눈 도치': {
      images: [
          '/hedgehog/hedgehog1.png',
          '/hedgehog/hedgehog2.png',
          '/hedgehog/hedgehog3.png',
          '/hedgehog/hedgehog4.png',
          '/hedgehog/hedgehog5.png',
          '/hedgehog/hedgehog6.png',
          '/hedgehog/hedgehog7.png',
          '/hedgehog/hedgehog8.png',
      ],
      questions: [
        {
          question: '퀴즈1. 왜 달빛 조각을 친구들에게 나누어 주었나요?', //이해력
          category: '이해력',
          options: [
            '친구들이 어두운 밤길을 무서워했기 때문이에요.',
            '함께 나누면 더 따뜻하고 밝다고 생각했기 때문이에요.', //✅
            '친구들이 달빛 조각을 훔쳐갔기 때문이에요',
            '달빛 조각이 너무 무거웠기 때문이에요.'
          ],
          answerIndex: 1
        },
        {
          question: '퀴즈2. 달빛 조각을 가장 처음 받은 동물은 누구였나요??', //기억력
          category: '기억력',
          options: [
            '토끼',
            '새',
            '부엉이', //✅
            '다람쥐'
          ],
          answerIndex: 2
        },
        {
          question: '퀴즈3. 도치는 달빛 조각을 어디에 담았나요요?', //주의 집중
          category: '주의 집중력',
          options: [
            '상자',
            '바구니', //✅
            '주머니',
            '가방'
          ],
          answerIndex: 1
        },
        {
          question: '퀴즈4. “빛은 함께 나눌 때 더 밝아진다”는 말은 어떤 뜻인가요?', //언어추론
          category: '언어 추론력',
          options: [
            '빛은 어두운 곳에서만 사용할 수 있다.',
            '친구에게 물건을 주면 다시 돌려받아야 한다는 뜻이에요.',
            '밝은 물건은 금방 사라진다는 뜻이에요.',
            '혼자보다 친구와 함께 있을 때 기쁨이 커진다는 뜻이에요.', //✅
          ],
          answerIndex: 3
        }
      ]
    }
  };

  const quiz = quizData[selectedTitle];
  const [translateX, setTranslateX] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [resultMessage, setResultMessage] = useState('');
  const [showCorrectModal, setShowCorrectModal] = useState(false);
  const [showWrongModal, setShowWrongModal] = useState(false);
  const [scores, setScores] = useState({
    '이해력': 0,
    '기억력': 0,
    '주의 집중력': 0,
    '언어 추론력': 0,
  });

  const slideStep = 120;
  const imageWidth = 340;

  const speak = (text) => {
    if (!window.speechSynthesis) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ko-KR';
    utterance.pitch = 1.2;
    utterance.rate = 0.95;

    const voices = window.speechSynthesis.getVoices();
    const koreanVoice = voices.find(
      (v) =>
        v.lang === 'ko-KR' &&
        (v.name.includes('Google') || v.name.includes('female') || v.name.includes('child'))
    );

    if (koreanVoice) {
      utterance.voice = koreanVoice;
    }

    window.speechSynthesis.speak(utterance);
  };

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
    setSelectedOptionIndex(null);
    setResultMessage('');
    setCurrentQuestionIndex((prev) => (prev === 0 ? questions.length - 1 : prev - 1));
  };

  const handleQuestionNext = () => {
    setSelectedOptionIndex(null);
    setResultMessage('');
    setCurrentQuestionIndex((prev) => (prev === questions.length - 1 ? 0 : prev + 1));
  };

  const handleOptionClick = (index) => {
    setSelectedOptionIndex(index);
  };

  const handleSubmit = () => {
    const current = questions[currentQuestionIndex];
    const isCorrect = selectedOptionIndex === current.answerIndex;
    setResultMessage(isCorrect ? '정답입니다!' : '틀렸습니다.');

    if (isCorrect) {
      setScores((prev) => ({
        ...prev,
        [current.category]: prev[current.category] + 1,
      }));

      // 모달 + 폭죽 실행
      setShowCorrectModal(true);
      confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
      setTimeout(() => setShowCorrectModal(false), 2000);
    } else {
      setShowWrongModal(true);
      setTimeout(() => setShowWrongModal(false), 1500);
    }
  };

  const handleFinishQuiz = () => {
    const prevScoresRaw = localStorage.getItem('quizScores');
    const prevScores = prevScoresRaw ? JSON.parse(prevScoresRaw) : {};

    // 기존 점수 + 현재 점수 누적
    const mergedScores = { ...prevScores };

    Object.entries(scores).forEach(([category, count]) => {
      mergedScores[category] = (mergedScores[category] || 0) + count;
    });

    localStorage.setItem('quizScores', JSON.stringify(mergedScores));
    navigate('/stats');
  };

  return (
    <Main>
      <div className="quiz-page">
        {showCorrectModal && (
          <div className="correct-modal">
            <div className="correct-content">🎉 정답입니다! 🎉</div>
          </div>
        )}

        {showWrongModal && (
          <div className="correct-modal">
            <div className="correct-content wrong">❌ 다시 고민해볼까요? ❌</div>
          </div>
        )}
        <div className="quiz-images">
          <div
            className="quiz-images-wrapper"
            style={{
              transform: `translateX(${translateX}px)`,
              transition: 'transform 0.3s ease-in-out',
              width: `${images.length * imageWidth}px`,
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
            <button
              className="listen-button"
              onClick={() => speak(questions[currentQuestionIndex].question)}
            >
              🔊 듣기
            </button>
          </div>

          <div className="quiz-options">
            {questions[currentQuestionIndex].options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleOptionClick(i)}
                className={selectedOptionIndex === i ? 'selected' : ''}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="quiz-nav-buttons">
            <button onClick={handleQuestionPrev}>이전</button>
            <button onClick={handleQuestionNext}>다음</button>
          </div>

          <div className="quiz-bottom-buttons">
            <button onClick={handleSubmit}>제출</button>
            <button onClick={handleFinishQuiz}>퀴즈 끝내기</button>
          </div>

        </div>
      </div>
    </Main>
  );
}

export default Quiz;
