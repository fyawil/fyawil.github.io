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
      nextPlayer: "W",
    };

    this.selectSquare = this.selectSquare.bind(this);
    this.displayPlayer = this.displayPlayer.bind(this);
  }

  displayPlayer(i, j) {
    if (this.state.currentBoard[i][j] == "B") {
      return (
        <img
          value={[i, j]}
          onClick={this.selectSquare}
          style={{
            height: this.state.attackingSoldier == [i, j] ? "100%" : "80%",
          }}
          src="./black.svg"
          alt="A black player"
        ></img>
      );
    }
    if (this.state.currentBoard[i][j] == "W") {
      return (
        <img
          value={[i, j]}
          onClick={this.selectSquare}
          style={{
            height: this.state.attackingSoldier == [i, j] ? "100%" : "80%",
          }}
          src="./white.svg"
          alt="A white player"
        ></img>
      );
    }
    if (this.state.currentBoard[i][j] == "") {
      return (
        <div
          value={[i, j]}
          onClick={this.selectSquare}
          style={{ height: "100%" }}
        ></div>
      );
    }
  }

  selectSquare(event) {
    var row = event.target.getAttribute("value")[0];
    var col = event.target.getAttribute("value")[2];
    switch (this.state.currentBoard[row][col]) {
      case this.state.nextPlayer:
        this.setState({
          attackingSoldier: event.target.getAttribute("value"),
        });
        break;
      case "":
        if (this.state.attackingSoldier != null) {
          this.setState((state) => ({
            currentBoard: state.currentBoard.map((array, i) =>
              i == row
                ? array.map((el, j) => (j == col ? state.nextPlayer : el))
                : array
            ),
          }));
          this.setState((state) => ({
            currentBoard: state.currentBoard.map((array, k) =>
              k == state.attackingSoldier[0]
                ? array.map((el, l) =>
                    l == state.attackingSoldier[2] ? "" : el
                  )
                : array
            ),
          }));
        }
        break;
    }
  }

  render() {
    return (
      <div>
        <h1>Until The Last</h1>
        <h2>Next Player: {this.state.nextPlayer}</h2>
        <h2>Attacker: {this.state.attackingSoldier}</h2>
        <div id="current-board">
          <div value={[0, 0]} onClick={this.selectSquare} className="square">
            {this.displayPlayer(0, 0)}
          </div>
          <div value={[0, 1]} onClick={this.selectSquare} className="square">
            {this.displayPlayer(0, 1)}
          </div>
          <div value={[0, 2]} onClick={this.selectSquare} className="square">
            {this.displayPlayer(0, 2)}
          </div>
          <div value={[1, 0]} onClick={this.selectSquare} className="square">
            {this.displayPlayer(1, 0)}
          </div>
          <div value={[1, 1]} onClick={this.selectSquare} className="square">
            {this.displayPlayer(1, 1)}
          </div>
          <div value={[1, 2]} onClick={this.selectSquare} className="square">
            {this.displayPlayer(1, 2)}
          </div>
          <div value={[2, 0]} onClick={this.selectSquare} className="square">
            {this.displayPlayer(2, 0)}
          </div>
          <div value={[2, 1]} onClick={this.selectSquare} className="square">
            {this.displayPlayer(2, 1)}
          </div>
          <div value={[2, 2]} onClick={this.selectSquare} className="square">
            {this.displayPlayer(2, 2)}
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<UntilTheLast />, document.getElementById("untilthelast"));
