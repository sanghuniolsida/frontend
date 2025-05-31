import React from 'react';
import Main from '../../components/Main';
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
import './chart.css';
import { radarData, radarOptions } from '../StatsPage/chartConfig';

// Chart.js 구성 요소 등록
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

function GrowthPage() {
  return (
    <Main>
      <div className="growth-section">
        {/* 상단 곡선 - 흰색 영역의 일부 */}
        <div className="growth-top-curve"></div>

        {/* 메인 흰색 박스 - 사각형 */}
        <div className="growth-box">
          <Radar data={radarData} options={radarOptions} />
        </div>

        {/* 하단 곡선 - 흰색 영역의 일부 */}
        <div className="growth-bottom-curve"></div>
      </div>
    </Main>
  );
}

export default GrowthPage;
