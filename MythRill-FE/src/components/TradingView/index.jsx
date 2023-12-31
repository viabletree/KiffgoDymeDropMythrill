import React, { useEffect, useRef } from 'react';
import './styles.scss';
import Loader from '../loader';

let tvScriptLoadingPromise;

export default function TradingViewWidget({ name_slug }) {
  const onLoadScriptRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      const divElement = document.querySelector('.tradingview-loader');
      divElement.classList.add('trading-disbale');
    }, 5000);

    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement('script');
        script.id = 'tradingview-widget-loading-script';
        script.src = 'https://s3.tradingview.com/tv.js';
        script.type = 'text/javascript';
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );

    return () => (onLoadScriptRef.current = null);

    function createWidget() {
      if (
        document.getElementById('tradingview_b0cd5') &&
        'TradingView' in window
      ) {
        new window.TradingView.widget({
          autosize: true,
          symbol: name_slug ? name_slug : 'NASDAQ:AAPL',
          interval: 'D',
          timezone: 'Etc/UTC',
          theme: 'dark',
          style: '1',
          locale: 'en',
          toolbar_bg: '#f1f3f6',
          enable_publishing: false,
          hide_legend: true,
          save_image: false,
          hide_volume: true,
          container_id: 'tradingview_b0cd5'
        });
      }
    }
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div id="tradingview_b0cd5" />
      <div className="tradingview-loader">
        <Loader />
      </div>
    </div>
  );
}
