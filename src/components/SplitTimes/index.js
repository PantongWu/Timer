import React from 'react';
import MajorClock from '../MajorClock';

const SplitTimes = ({ value = [] }) => {
    return (
        <React.Fragment>  {/* 聚合元素 */}
            <style jsx>
            {`
                .split-times-box {
                    width: 100%;
                    height: 430px;
                    overflow-y: auto;
                    overflow-x: hidden;
                }
            `}
            </style>
            <div className="split-times-box">
                {
                    value.map((v, k) => (
                        <MajorClock key={k} number={k + 1} milliseconds={v} />
                    ))
                }
            </div>
        </React.Fragment>
    )
};

export default SplitTimes;