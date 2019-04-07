import React from 'react';

import './style.less'

import MajorClock from '../MajorClock';
import ControlButtons from '../ControlButtons';
import SplitTimes from '../SplitTimes';

class StopWatch extends React.Component {

    constructor(props) {
        super(...arguments);
        this.state = {
            isStarted: false,
            startTime: null,
            currentTime: null,
            splits: [],
        };

        this.onSplit = this.onSplit.bind(this);
        this.onStart = this.onStart.bind(this);
        this.onPause = this.onPause.bind(this);
        this.onReset = this.onReset.bind(this);
    }

    onSplit() {
        this.setState({
            splits: [...this.state.splits, this.state.currentTime - this.state.startTime]
        });
    }

    onStart() {
        this.setState({
            isStarted: true,
            startTime: this.state.startTime || new Date(),
            currentTime: new Date()
        });

        this.intervalHandle = setInterval(() => {
            this.setState({ currentTime: new Date() });
        }, 1000 / 60);
    }

    onPause() {
        clearInterval(this.intervalHandle);
        this.setState({ isStarted: false });
    }

    onReset() {
        this.setState({ startTime: null, currentTime: null, splits: [] });
    }

    render() {
        return (
            <section className="watch-container">
                <MajorClock activated={this.state.isStarted}
                    milliseconds={this.state.currentTime - this.state.startTime} />
                <ControlButtons activated={this.state.isStarted}
                    onStart={this.onStart}
                    onPause={this.onPause}
                    onReset={this.onReset}
                    onSplit={this.onSplit} />
                <SplitTimes value={this.state.splits} />
            </section>
        );
    }
}

export default StopWatch;