class Timer extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        work: 0,
        rest: 0,
        rounds: 0,
        isStarted: false,
        seconds: 0
      }
 this.decrementRounds = this.decrementRounds.bind(this);
 this.incrementRounds = this.incrementRounds.bind(this);
 this.decrementWork = this.decrementWork.bind(this);
 this.incrementWork = this.incrementWork.bind(this);
 this.decrementRest = this.decrementRest.bind(this);
 this.incrementRest = this.incrementRest.bind(this);
 this.countDown = this.countDown.bind(this);
 this.play = this.play.bind(this);
 this.pause = this.pause.bind(this);
 this.reset = this.reset.bind(this);
  }

  decrementRounds(event) {
  this.setState({      
    rounds: this.state.rounds - (+event.target.value) <= 0 ? 0 : this.state.rounds - (+event.target.value)
  });
  }
  incrementRounds(event) {
    this.setState({      
      rounds: this.state.rounds + (+event.target.value)
    });
  }

  decrementWork(event) {
    this.setState({      
      work: this.state.work - (+event.target.value) <= 0 ? 0 : this.state.work - (+event.target.value)
    });
  }
  incrementWork(event) {
    this.setState({      
      work: this.state.work + (+event.target.value)
    });
    }

    decrementRest(event) {
      this.setState({      
        rest: this.state.rest - (+event.target.value) <= 0 ? 0 : this.state.rest - (+event.target.value)
      });
    }
    incrementRest(event) {
      this.setState({      
        rest: this.state.rest + (+event.target.value)
      });
    }

    countDown() {
        this.setState({      
        seconds: (this.state.work+this.state.rest) * this.state.rounds,
        isStarted: true
      });
      this.myTimer = setInterval(() => {
        if(this.state.seconds !== 0) { this.setState({      
          seconds: this.state.seconds-1
          });
        }
        else {
          clearInterval(this.myTimer);
          this.setState({      
            isStarted: false
             });
        }
      }, 1000)
    }

    play() {
      clearInterval(this.myTimer);
      this.myTimer = setInterval(() => {
        if(this.state.seconds !== 0) { this.setState({      
          seconds: this.state.seconds-1
          });
        }
        else {
          clearInterval(this.myTimer);
          this.setState({      
            isStarted: false
             });
        }
      }, 1000)
  }

    pause() {
        clearInterval(this.myTimer);
    }

    reset() {
      clearInterval(this.myTimer);
      this.setState({      
        work: 0,
        rest: 0,
        rounds: 0,
        isStarted: false,
        seconds: 0
         });
    }

    

    render() {
        return (
          <div id="timer">
            <div id="rds">
              <h3 id="rds_title">Rounds</h3>
              <button value="1" id="rds_minus_1" onClick={this.decrementRounds}>-1</button>
              <button value="10" id="rds_minus_10" onClick={this.decrementRounds}>-10</button>
              <h1 id="work_rds">{this.state.rounds}</h1>
              <button value="10" id="rds_plus_10" onClick={this.incrementRounds}>+10</button>
              <button value="1" id="rds_plus_1" onClick={this.incrementRounds}>+1</button>
            </div>

            <div id="work">
              <h3 id="work_title">Work</h3>
              <button value="60" id="work_mins_minus_1" onClick={this.decrementWork}>-1min</button>
              <h1 id="work_mins">{(this.state.work-this.state.work%60)/60}</h1>
              <button value="60" id="work_mins_plus_1" onClick={this.incrementWork}>+1min</button>

              <button value="10" id="work_secs_minus_10" onClick={this.decrementWork}>-10secs</button>
              <h1 id="work_secs">{this.state.work%60}</h1>  
              <button value="10" id="work_secs_plus_10" onClick={this.incrementWork}>+10secs</button>
            </div>

            <div id="rest">
            <h3 id="rest_title">Rest</h3>
              <button value="60" id="rest_mins_minus_1" onClick={this.decrementRest}>-1min</button>
              <h1 id="rest_mins">{(this.state.rest-this.state.rest%60)/60}</h1>
              <button value="60" id="rest_mins_plus_1" onClick={this.incrementRest}>+1min</button>

              <button value="10" id="rest_secs_minus_10" onClick={this.decrementRest}>-10secs</button>
              <h1 id="rest_secs" >{this.state.rest%60}</h1>
              <button value="10" id="rest_secs_plus_10" onClick={this.incrementRest}>+10secs</button>

            </div>

            <div id="countdown">
              <button id="start" onClick={!this.state.isStarted? this.countDown:this.play}>Start</button>
              <button id="pause" onClick={this.pause}>Pause</button>
              <button id="reset" onClick={this.reset}>Reset</button>
              <h1 id="mins_left">{(this.state.seconds - this.state.seconds%60)/60}</h1>
              <h1 id="colon">:</h1>             
              <h1 id="secs_left">{this.state.seconds%60}</h1>
            </div>
          </div>
);
    }
}

ReactDOM.render(<Timer />, document.getElementById('timer'));
