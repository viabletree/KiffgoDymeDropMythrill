// @flow
import _ from 'lodash';
import React from 'react';
import { css } from 'aphrodite';
import { Slider, Rail, Handles, Tracks, Ticks } from 'react-compound-slider';
import styles from './DMTimeSliderStyles';
import { Colors, AppStyles } from '../../../../theme';

import {
  DATE_FORMAT3,
  TIME_FORMAT1,
  DATE_TIME_FORMAT1
} from '../../../../constants';
import Util from '../../../../services/Util';

export function Handle({ handle: { id, value, percent }, getHandleProps }) {
  return (
    <div
      style={{
        left: `${percent + 1}%`,
        position: 'absolute',
        marginLeft: -15,
        marginTop: 8,
        zIndex: 2,
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        border: 0,
        textAlign: 'center',
        cursor: 'pointer',
        backgroundColor: '#0dffbe',
        color: '#333'
      }}
      {...getHandleProps(id)}
    ></div>
  );
}

function Track({ source, target, getTrackProps }) {
  return (
    <div
      style={{
        position: 'absolute',
        height: 8,
        zIndex: 1,
        marginTop: 15,
        backgroundColor: '#0dffbe',
        opacity: 1,
        borderRadius: 5,
        cursor: 'pointer',
        left: `${source.percent}%`,
        width: `${target.percent - source.percent}%`
      }}
      {
        ...getTrackProps() /* this will set up events if you want it to be clickeable (optional) */
      }
    >
      {/* <p
        style={{
          position: 'absolute',
          zIndex: 1,
          marginTop: 15
        }}
      >
        yes
      </p> */}
    </div>
  );
}

const v = {
  '1': '1',
  '2': '2',
  '3': '3',
  '4': '4',
  '5': '5',
  '6': '6',
  '7': '7',
  '8': '8',
  '9': '9',
  '10': '10'
};

function Tick({ tick, count }) {
  return (
    <div>
      {/* <div
        style={{
          position: 'absolute',
          marginTop: 52,
          marginLeft: -0.5,
          width: 1,
          height: 8,
          backgroundColor: 'silver',
          left: `${tick.percent}%`,
        }}
      />*/}
      <div
        style={{
          position: 'absolute',
          marginTop: 45,
          fontSize: 10,
          textAlign: 'center',
          marginLeft: `${-(100 / count) / 2}%`,
          width: `${100 / count}%`,
          left: `${tick.percent}%`
        }}
      >
        {v[tick.value]}
      </div>
    </div>
  );
}

export default function DMTimeSliderView(props) {
  return (
    <div className={css(styles.sliderWrapper)}>
      <Slider
        rootStyle={{
          // Give the slider some width
          position: 'relative',
          width: '95%',
          height: 65,
          margin: 'auto'
        }}
        domain={[0, 36]}
        step={1}
        values={_.cloneDeep(props.selectedTimeRange)}
        onUpdate={props.onChange}
        reversed={false}
      >
        <Rail>
          {({ getRailProps }) => (
            <div className={css(styles.railStyle)} {...getRailProps()} />
          )}
        </Rail>
        <Handles>
          {({ handles, getHandleProps }) => (
            <div className="slider-handles">
              {handles.map(handle => (
                <Handle
                  key={handle.id}
                  handle={handle}
                  getHandleProps={getHandleProps}
                />
              ))}
            </div>
          )}
        </Handles>
        <Tracks right={false} left={false}>
          {({ tracks, getTrackProps }) => (
            <div className="slider-tracks">
              {tracks.map(({ id, source, target }) => (
                <Track
                  key={id}
                  source={source}
                  target={target}
                  getTrackProps={getTrackProps}
                />
              ))}
            </div>
          )}
        </Tracks>
        {/* <Ticks >
        {({ ticks }) => (
          <div className="slider-ticks">
            {ticks.map(tick => (
              <Tick key={tick.id} tick={tick} count={ticks.length} />
            ))}
          </div>
        )}
      </Ticks> */}
      </Slider>
      <div className={css(styles.sliderDayWrapper)}>
        <p className={css([AppStyles.whiteColor, styles.dayStyle])}>
          {props.finalDateTime}
        </p>
      </div>
    </div>
  );
}
