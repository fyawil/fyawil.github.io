class TicTacToe extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        nextPlayer: "X",
        statusMessage: "Next Player: X",
        currentGrid: [[" "," "," "],[" "," "," "],[" "," "," "]],
        currentGridMadeToString: "",
        isXWinner: false,
        isOWinner: false,
        isGameOn: true
        };

        this.incrementTurn = this.incrementTurn.bind(this);
        this.reset = this.reset.bind(this)
      }

      reset(){
        this.setState({
        nextPlayer: "X",
        statusMessage: "Next player: X",
        currentGrid: [[" "," "," "],[" "," "," "],[" "," "," "]],
        currentGridMadeToString: "",
        isXWinner: false,
        isOWinner: false,
        isGameOn: true          
        })
      }

      incrementTurn(event){

        switch (event.target.getAttribute("value")){
          case "0":
          this.setState({
            currentGrid: 
            [
              
              [`${this.state.nextPlayer}`, this.state.currentGrid[0][1], this.state.currentGrid[0][2]],
              this.state.currentGrid[1],
              this.state.currentGrid[2]

              ]
          });
          break;
          case "1":
          this.setState({
            currentGrid: [

              [this.state.currentGrid[0][0],`${this.state.nextPlayer}`, this.state.currentGrid[0][2]],
              this.state.currentGrid[1],
              this.state.currentGrid[2]

              ]
          });
          break;
          case "2":
          this.setState({
            currentGrid: [

              [this.state.currentGrid[0][0],this.state.currentGrid[0][1], `${this.state.nextPlayer}`],
              this.state.currentGrid[1],
              this.state.currentGrid[2]

              ]
          });
          break;

          case "3":
          this.setState({
            currentGrid: [

              this.state.currentGrid[0],
              [`${this.state.nextPlayer}`, this.state.currentGrid[1][1], this.state.currentGrid[1][2]],
              this.state.currentGrid[2]

              ]
          });
          break;
        case "4":
          this.setState({
            currentGrid: [

              this.state.currentGrid[0],
              [this.state.currentGrid[1][0], `${this.state.nextPlayer}`,  this.state.currentGrid[1][2]],
              this.state.currentGrid[2]

              ]
          });
          break;
          case "5":
          this.setState({
            currentGrid: [

              this.state.currentGrid[0],
              [this.state.currentGrid[1][0], this.state.currentGrid[1][1], `${this.state.nextPlayer}`],
              this.state.currentGrid[2]

              ]
          });
          break;

          case "6":
          this.setState({
            currentGrid: [

              this.state.currentGrid[0],
              this.state.currentGrid[1],
              [`${this.state.nextPlayer}`, this.state.currentGrid[2][1], this.state.currentGrid[2][2]]

              ]
          });
          break;
          case "7":
          this.setState({
            currentGrid: [

              this.state.currentGrid[0],
              this.state.currentGrid[1],
              [this.state.currentGrid[2][0], `${this.state.nextPlayer}`, this.state.currentGrid[2][2]]

              ]
          });
          break;
          case "8":
          this.setState({
            currentGrid: [

              this.state.currentGrid[0],
              this.state.currentGrid[1],
              [this.state.currentGrid[2][0], this.state.currentGrid[2][1], `${this.state.nextPlayer}`]

              ]
          });
          break;
        }

        this.setState(state => ({
          nextPlayer: state.nextPlayer == "X"? "O": "X"
        }));       

        this.setState(state => ({
          currentGridMadeToString: 
          `${state.currentGrid[0].join("")},${state.currentGrid[1].join("")},${state.currentGrid[2].join("")}`
        }));

        let xIsWinner = (/XXX|X(.|\s)(.|\s),X(.|\s)(.|\s),X(.|\s)(.|\s)|(.|\s)X(.|\s),(.|\s)X(.|\s),(.|\s)X(.|\s)|(.|\s)(.|\s)X,(.|\s)(.|\s)X,(.|\s)(.|\s)X|X(.|\s)(.|\s),(.|\s)X(.|\s),(.|\s)(.|\s)X|(.|\s)(.|\s)X,(.|\s)X(.|\s),X(.|\s)(.|\s)/);
        let oIsWinner = (/OOO|O(.|\s)(.|\s),O(.|\s)(.|\s),O(.|\s)(.|\s)|(.|\s)O(.|\s),(.|\s)O(.|\s),(.|\s)O(.|\s)|(.|\s)(.|\s)O,(.|\s)(.|\s)O,(.|\s)(.|\s)O|O(.|\s)(.|\s),(.|\s)O(.|\s),(.|\s)(.|\s)O|(.|\s)(.|\s)O,(.|\s)O(.|\s),O(.|\s)(.|\s)/);
        let gridIsFull = (/(X|O)(X|O)(X|O),(X|O)(X|O)(X|O),(X|O)(X|O)(X|O)/)

          this.setState(state => ({
          isGameOn: xIsWinner.test(state.currentGridMadeToString) || oIsWinner.test(state.currentGridMadeToString) || gridIsFull.test(state.currentGridMadeToString)? false: true,
          isXWinner: xIsWinner.test(state.currentGridMadeToString)? true: false,
          isOWinner: oIsWinner.test(state.currentGridMadeToString)? true: false
        }));

        this.setState(state => ({
          statusMessage:
            state.isGameOn && state.nextPlayer == "X"? "Next Player: X":
            state.isGameOn && state.nextPlayer == "O"? "Next Player: O":
            !state.isGameOn && state.isXWinner? "Winner: X":
            !state.isGameOn && state.isOWinner? "Winner: O":
            "Tie"
        }));


    


      }

  render() {
    return (
        <div id="game">

          <div className="status">{this.state.statusMessage}</div>
          <div id="grid">
            <div id="top-left-square" className="square" value="0"
            onClick={this.state.currentGrid[0][0] == " " && this.state.isGameOn? this.incrementTurn: null}>{this.state.currentGrid[0][0]}</div>
            <div id="top-mid-square" className="square" value="1"
            onClick={this.state.currentGrid[0][1] == " " && this.state.isGameOn? this.incrementTurn: null}>{this.state.currentGrid[0][1]}</div>
            <div id="top-right-square" className="square" value="2"
            onClick={this.state.currentGrid[0][2] == " " && this.state.isGameOn? this.incrementTurn: null}>{this.state.currentGrid[0][2]}</div>
            <div id="mid-left-square" className="square" value="3"
            onClick={this.state.currentGrid[1][0] == " " && this.state.isGameOn? this.incrementTurn: null}>{this.state.currentGrid[1][0]}</div>
            <div id="mid-mid-square" className="square" value="4"
            onClick={this.state.currentGrid[1][1] == " " && this.state.isGameOn? this.incrementTurn: null}>{this.state.currentGrid[1][1]}</div>
            <div id="mid-right-square" className="square" value="5"
            onClick={this.state.currentGrid[1][2] == " " && this.state.isGameOn? this.incrementTurn: null}>{this.state.currentGrid[1][2]}</div>
            <div id="bottom-left-square" className="square" value="6"
            onClick={this.state.currentGrid[2][0] == " " && this.state.isGameOn? this.incrementTurn: null}>{this.state.currentGrid[2][0]}</div>
            <div id="bottom-mid-square" className="square" value="7"
            onClick={this.state.currentGrid[2][1] == " " && this.state.isGameOn? this.incrementTurn: null}>{this.state.currentGrid[2][1]}</div>
            <div id="bottom-right-square" className="square" value="8"
            onClick={this.state.currentGrid[2][2] == " " && this.state.isGameOn? this.incrementTurn: null}>{this.state.currentGrid[2][2]}</div>
          </div>
          <div className="reset" onClick={this.reset}>Reset</div>
        </div>
    )
  }
}

ReactDOM.render( <TicTacToe />, document.getElementById('tictactoe') );