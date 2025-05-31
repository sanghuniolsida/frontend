import React, { useState } from 'react';
import Main from '../../components/Main';
import { useNavigate } from 'react-router-dom';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import './stats.css';
import { stats as initialStats, radarOptions } from './chartConfig';

// Chart.js 구성 요소 등록
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

function StatsPage() {
  const navigate = useNavigate();

  // 상태로 stats 데이터 관리
  const [stats, setStats] = useState(initialStats);

  // 막대 클릭 시 값 변경 함수
  const handleBarClick = (index) => {
    setStats((prevStats) => {
      const newStats = [...prevStats];
      // 값을 1씩 증가시키되 10을 넘으면 1로 리셋
      newStats[index].value =
        newStats[index].value >= 10 ? 1 : newStats[index].value + 1;
      return newStats;
    });
  };

  // 실시간 레이더 데이터 생성
  const radarData = {
    labels: stats.map((s) => s.label),
    datasets: [
      {
        label: '능력치',
        data: stats.map((s) => s.value * 10),
        backgroundColor: 'rgba(246,223,123,0.2)',
        borderColor: '#F6DF7B',
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  return (
    <Main>
      <div className="stats-section">
        {/* 상단 곡선 - 흰색 영역의 일부 */}
        <div className="stats-top-curve"></div>

        {/* 메인 흰색 박스 - 사각형 */}
        <div className="stats-box">
          {/* 진행 막대들 */}
          <div className="progress-list">
            {stats.map((s, index) => (
              <div key={s.label} className="progress-item">
                <span className="label">{s.label}</span>
                <span className="end-label">0</span>
                <div className="bar-container">
                  <div
                    className="bar-fill"
                    style={{ width: `${s.value * 10}%` }}
                  ></div>
                  <span className="value" style={{ left: `${s.value * 10}%` }}>
                    {s.value}
                  </span>
                </div>
                <span className="end-label">10</span>
              </div>
            ))}
          </div>

          {/* 레이더 차트 - 중간 박스 하단부터 하단 곡선까지 */}
          <div className="radar-wrapper" onClick={() => navigate('/growth')}>
            <Radar data={radarData} options={radarOptions} />
          </div>
        </div>

        {/* 하단 곡선 - 흰색 영역의 일부 */}
        <div className="stats-bottom-curve"></div>
      </div>
    </Main>
  );
}

export default StatsPage;
