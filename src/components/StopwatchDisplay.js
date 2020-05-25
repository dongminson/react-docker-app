import React from 'react';

const StopwatchDisplay = (props) => {

    return (
        <span>
          {props.formatTime(props.currentTimeMin)}:
          {props.formatTime(props.currentTimeSec)}:
          {props.formatTime(props.currentTimeMs, 'ms')}
        </span>
    );
  
}

export default StopwatchDisplay;