import React, { Component, useEffect, useMemo, useRef, useState } from 'react';

import './styles.scss';
import { css } from 'aphrodite';
import { AppStyles } from '../../theme';
import { Grid } from 'antd';

import ExtraDetailes from './extraDetailes';
import ChartComponent from './chartComponent';

import ChartType from './chartview';
import ChartView from './chartview';
import TradingViewWidget from '../TradingView';
const { useBreakpoint } = Grid;

const Chart = ({ name_slug, data, color, stockId, frequency }) => {
  const [chartType, setChartType] = useState('areaspline');
  const [chartView, setChartView] = useState('myThril');

  const screens = useBreakpoint();

  const chartChange = (type) => {
    setChartType(type);
  };

  const chartviewChange = (type) => {
    setChartView(type);
  };

  const chartComponent = useMemo(
    () => <ChartComponent chartType={chartType} data={data} color={color} />,
    [chartType, color, data, chartView]
  );
  const tradingView = useMemo(
    () => <TradingViewWidget name_slug={name_slug} />,
    [chartView]
  );

  return (
    <>
      <ChartView
        stockId={stockId}
        frequencyAlertShow={frequency}
        chartView={chartView}
        chartviewChange={chartviewChange}
      />

      {!screens.lg && (
        <ExtraDetailes
          className={
            chartView === 'trading' ? 'chart-view' : 'chart-above-detailes'
          }
          chartChange={chartChange}
          chartType={chartType}
          color={color}
          chartView={chartView === 'trading' && true}
        />
      )}
      {chartView === 'myThril' ? (
        chartType && (
          <div className={`bigchart ${css(AppStyles.mTop20)}`}>
            {screens.lg && (
              <ExtraDetailes
                color={color}
                className="extra-detailes"
                chartChange={chartChange}
                chartType={chartType}
              />
            )}
            {chartComponent}
          </div>
        )
      ) : (
        <>
          {screens.lg && (
            <ExtraDetailes
              color={color}
              chartView={true}
              className="chart-view"
              chartChange={chartChange}
              chartType={chartType}
            />
          )}
          {tradingView}
        </>
      )}
    </>
  );
};

export default Chart;
