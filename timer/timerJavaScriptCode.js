class Timer extends React.Component {
  constructor(props) {
    super(props);
  }
    render() {
        return (
          <div>
            <Clock />
          </div>
);
    }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    seconds: 0,
    minutes: 0
  }
  }
    render() {
        return (
          <div>
           <h1>{this.state.minutes}</h1>
           <h1>{this.state.seconds}</h1>
          </div>
);
    }
}

ReactDOM.render(<Timer />, document.getElementById('timer'));
