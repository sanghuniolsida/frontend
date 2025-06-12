import React, { useState } from 'react';
import Main from '../../components/Main';
import { useLocation } from 'react-router-dom';
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

  const [stats, setStats] = useState(() => {
    const stored = localStorage.getItem('quizScores');
    const scoreData = stored ? JSON.parse(stored) : null;

    if (scoreData) {
      return initialStats.map((s) => ({
        ...s,
        value: scoreData[s.key] || 0, // label 대신 key 사용
      }));
    }
    return initialStats;
  });


  const handleReset = () => {
    localStorage.removeItem('quizScores');
    setStats(initialStats.map((s) => ({ ...s, value: 0 })));
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
      {
        label: '전체 평균',
        data: [78, 55, 65, 55], // ← 예시 평균값 (이해력, 기억력, 주의 집중력, 사고력)
        backgroundColor: 'rgba(160,160,160,0.1)',
        borderColor: '#7B68EE',
        borderDash: [4, 4],
        borderWidth: 1,
        fill: true,
     } 
    ],
  };

  return (
    <Main>
      <div className="stats-section">
        <div className="circle-deco top1" />
        <div className="stats-box">
          <div className="progress-list">
            {stats.map((s) => (
              <div key={s.label} className="progress-item">
                <span className="label">{s.label}</span>
                <span className="end-label">0</span>
                <div className="bar-container">
                  <div className="bar-fill" style={{ width: `${s.value * 10}%` }}></div>
                  <span className="value" style={{ left: `${s.value * 10}%` }}>
                    {s.value}
                  </span>
                </div>
                <span className="end-label">10</span>
              </div>
            ))}
            <div>
              <button className="reset-button" onClick={handleReset}>⮌</button>
              <span className="legend-label">🟪 평균</span>
            </div>
          </div>
          <div className="radar-wrapper">
            <Radar data={radarData} options={radarOptions} />
          </div>
        </div>
        <div className="circle-deco bottom1" />
      </div>
    </Main>
  );
}

export default StatsPage;