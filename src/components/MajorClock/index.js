import React from 'react';
import padStart from 'lodash/padStart'; // 工具类库

import './style.less'

const formatTime = (data) => {

    const ms = data % 1000;
    const time = (data - ms) / 1000;
    const seconds = time % 60;
    const minutes = ((time - seconds) / 60) % 60;
    const hours = (((time - seconds) / 60) - minutes) / 60;

    return `${padStart(hours, 2, '0')}:${padStart(minutes, 2, '0')}:${padStart(seconds, 2, '0')}:${padStart(ms, 3, '0')}`;
}

const MajorClock = ({ number = 'header', milliseconds = 0, activated = false }) => {

    return number >= 0 ? (
        <div className="split-times-item">
            <span className="split-times-label">第 {number} 次:</span>
            <span className="split-times-content">{formatTime(milliseconds)}</span>
        </div>
    ) : (
        <React.Fragment>  {/* 聚合元素 */}
            <style jsx>
            {`
                h1 {
                    color: ${activated? '#ff7675' : '#fff'};
                }
            `}
            </style>
            <h1 className="major-clock-header">
                {formatTime(milliseconds)}
            </h1>
        </React.Fragment>
    )
};

export default MajorClock;