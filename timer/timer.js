class Timer extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        work: 0,
        rest: 0,
        rounds: 0,
        seconds: 0
      }
 this.decrementRounds = this.decrementRounds.bind(this)
 this.incrementRounds = this.incrementRounds.bind(this)
 this.decrementWork = this.decrementWork.bind(this)
 this.incrementWork = this.incrementWork.bind(this)
 this.decrementRest = this.decrementRest.bind(this)
 this.incrementRest = this.incrementRest.bind(this)
 this.countDown = this.countDown.bind(this)
  }

  decrementRounds() {
  this.setState({      
    rounds: this.state.rounds - 1 <= 0 ? 0 : this.state.rounds - 1
  });
  }
  incrementRounds() {
    this.setState({      
      rounds: this.state.rounds + 1
    });
  }

  decrementWork() {
    this.setState({      
      work: this.state.work - 5 <= 0 ? 0 : this.state.work - 5
    });
  }
  incrementWork() {
    this.setState({      
      work: this.state.work + 5
    });
    }

    decrementRest() {
      this.setState({      
        rest: this.state.rest - 5 <= 0 ? 0 : this.state.rest - 5
      });
    }
    incrementRest() {
      this.setState({      
        rest: this.state.rest + 5
      });
    }

    countDown() {

      this.setState({      
        seconds: (this.state.work+this.state.rest) * this.state.rounds
      });

    this.myTimer = setInterval(() => {
      if(this.state.seconds !==0){
        this.setState({      
          seconds: this.state.seconds - 1
        });
      }
      else {
        clearInterval(this.myTimer)
      }
    }, 1000)

    }

    

    render() {
        return (
          <div>
            <div>
              <button onClick={this.decrementRounds}>-</button>
              <h1>{this.state.rounds}</h1>
              <button onClick={this.incrementRounds}>+</button>
            </div>

            <div>
              <button onClick={this.decrementWork}>-</button>
              <h1>{this.state.work}</h1>
              <button onClick={this.incrementWork}>+</button>
            </div>

            <div>
              <button onClick={this.decrementRest}>-</button>
              <h1>{this.state.rest}</h1>
              <button onClick={this.incrementRest}>+</button>
            </div>

            <div>
              <button onClick={this.countDown}>Start</button>
              <button>Pause/Play</button>
              <button>Reset</button>
              <h1>{this.state.seconds}</h1>
            </div>
          </div>
);
    }
}

ReactDOM.render(<Timer />, document.getElementById('timer'));
