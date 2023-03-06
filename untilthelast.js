class UntilTheLast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentBoard: [
        ["W", "W", "W"],
        ["", "", ""],
        ["B", "B", "B"],
      ],
      attackingSoldier: null,
      attackedPosition: null,
      nextPlayer: "B",
    };

    this.selectSoldier = this.selectSoldier.bind(this);
  }

  selectSoldier(event) {
    var rowIndex = event.target.getAttribute("value")[0];
    var colIndex = event.target.getAttribute("value")[2];

    if (this.state.nextPlayer == this.state.currentBoard[rowIndex][colIndex]) {
      this.setState({
        attackingSoldier: event.target.getAttribute("value"),
      });
    }
    if (
      this.state.currentBoard[rowIndex][colIndex] != this.state.nextPlayer &&
      this.state.nextPlayer ==
        this.state.currentBoard[this.state.attackingSoldier[0]][
          this.state.attackingSoldier[2]
        ] &&
      Math.abs(
        +event.target.getAttribute("value")[0] - +this.state.attackingSoldier[0]
      ) < 2 &&
      Math.abs(
        +event.target.getAttribute("value")[2] - +this.state.attackingSoldier[2]
      ) < 2
    ) {
      this.setState({
        attackedPosition: event.target.getAttribute("value"),
      });

      this.setState((state) => ({
        currentBoard: state.currentBoard.map((array, i) =>
          i == state.attackingSoldier[0]
            ? array.map((el, j) => (j == state.attackingSoldier[2] ? "" : el))
            : array
        ),
      }));

      this.setState((state) => ({
        currentBoard: state.currentBoard.map((array, i) =>
          i == state.attackedPosition[0]
            ? array.map((el, j) =>
                j == state.attackedPosition[2] ? state.nextPlayer : el
              )
            : array
        ),
      }));

      this.setState((state) => ({
        attackingSoldier: null,
        attackedPosition: null,
        nextPlayer: state.nextPlayer == "B" ? "W" : "B",
      }));
    }
  }

  render() {
    return (
      <div>
        <h1>Until The Last</h1>
        <h2>Next Player: {this.state.nextPlayer}</h2>
        <div id="current-board">
          <div value={[0, 0]} style={{color: this.state.attackingSoldier == [0, 0]? "red": "white"}} onClick={this.selectSoldier} className="square">
            {this.state.currentBoard[0][0]}
          </div>
          <div value={[0, 1]} style={{color: this.state.attackingSoldier == [0, 1]? "red": "white"}} onClick={this.selectSoldier} className="square">
            {this.state.currentBoard[0][1]}
          </div>
          <div value={[0, 2]} style={{color: this.state.attackingSoldier == [0, 2]? "red": "white"}} onClick={this.selectSoldier} className="square">
            {this.state.currentBoard[0][2]}
          </div>
          <div value={[1, 0]} style={{color: this.state.attackingSoldier == [1, 0]? "red": "white"}} onClick={this.selectSoldier} className="square">
            {this.state.currentBoard[1][0]}
          </div>
          <div value={[1, 1]} style={{color: this.state.attackingSoldier == [1, 1]? "red": "white"}} onClick={this.selectSoldier} className="square">
            {this.state.currentBoard[1][1]}
          </div>
          <div value={[1, 2]} style={{color: this.state.attackingSoldier == [1, 2]? "red": "white"}} onClick={this.selectSoldier} className="square">
            {this.state.currentBoard[1][2]}
          </div>
          <div value={[2, 0]} style={{color: this.state.attackingSoldier == [2, 0]? "red": "white"}} onClick={this.selectSoldier} className="square">
            {this.state.currentBoard[2][0]}
          </div>
          <div value={[2, 1]} style={{color: this.state.attackingSoldier == [2, 1]? "red": "white"}} onClick={this.selectSoldier} className="square">
            {this.state.currentBoard[2][1]}
          </div>
          <div value={[2, 2]} style={{color: this.state.attackingSoldier == [2, 2]? "red": "white"}} onClick={this.selectSoldier} className="square">
            {this.state.currentBoard[2][2]}
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<UntilTheLast />, document.getElementById("untilthelast"));
