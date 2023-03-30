import React from 'react';

class IntervalTimer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: this.props.duration,
      isRunning: false
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.state.time > 0) {
        this.setState({ time: this.state.time - 1 });
      } else {
        clearInterval(this.timer);
        this.setState({ isRunning: false });
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  handleStartClick = () => {
    this.setState({ isRunning: true });
  }

  handleStopClick = () => {
    clearInterval(this.timer);
    this.setState({ isRunning: false });
  }

  handleResetClick = () => {
    clearInterval(this.timer);
    this.setState({ time: this.props.duration, isRunning: false });
  }

  render() {
    return (
      <div>
        <h1>Interval Timer</h1>
        <div>
          Time remaining: {this.state.time}
        </div>
        <div>
          {this.state.isRunning ? (
            <button onClick={this.handleStopClick}>Stop</button>
          ) : (
            <button onClick={this.handleStartClick}>Start</button>
          )}
          <button onClick={this.handleResetClick}>Reset</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<IntervalTimer />, document.getElementById("timer"));
