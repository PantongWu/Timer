import React from 'react';

import './style.less'

const ControlButtons = ({ activated, onStart, onPause, onReset, onSplit }) => {
    return activated ? (
        <div className="control-button-box">
            <div className="control-button-item t-l">
                <button className="control-button control-button-info" onClick={onSplit}>计次</button>
            </div>
            <div className="control-button-item t-r">
                <button className="control-button control-button-error" onClick={onPause}>停止</button>
            </div>
        </div>
    ) : (
        <div className="control-button-box">
            <div className="control-button-item t-l">
                <button className="control-button control-button-warn" onClick={onReset}>复位</button>
            </div>
            <div className="control-button-item t-r">
                <button className="control-button control-button-success" onClick={onStart}>启动</button>
            </div>
        </div>
    )
};

export default ControlButtons;