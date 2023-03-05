class UntilTheLast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentBoard: [
        ["w", "w", "w"],
        ["", "", ""],
        ["b", "b", "b"],
      ],
      attackingSoldier: null,
      attackedPosition: null,
      nextPlayer: "b",
    };

    this.selectSoldier = this.selectSoldier.bind(this);
  }

  selectSoldier(event) {
    var rowIndex = event.target.getAttribute("value")[0]
    var colIndex = event.target.getAttribute("value")[2]

    if(this.state.nextPlayer == this.state.currentBoard[rowIndex][colIndex]){
      this.setState({
        attackingSoldier: event.target.getAttribute("value")
      });      
    }
    if (this.state.currentBoard[rowIndex][colIndex] != this.state.nextPlayer &&
        this.state.nextPlayer == this.state.currentBoard[this.state.attackingSoldier[0]][this.state.attackingSoldier[2]]
      ){
      this.setState({
        attackedPosition: event.target.getAttribute("value")
      }); 
      let newBoard = [...this.state.currentBoard]
      newBoard[this.state.attackedPosition[0]][this.state.attackedPosition[2]] = this.state.nextPlayer;
      newBoard[this.state.attackingSoldier[0]][this.state.attackingSoldier[2]] = "";
      this.setState({
        currentBoard: [...newBoard]
      });

      this.setState(state => ({
        attackingSoldier: null,
        attackedPosition: null,
        nextPlayer: state.nextPlayer == "b"? "w": "b"
      })); 
    }
  }

  render() {
    return (
      <div>
        <h1>Kill All Enemies</h1>
        <h2>Next Player: {this.state.nextPlayer}</h2>
        <h2>Attacking Soldier: {this.state.attackingSoldier}</h2>
        <h2>Attacked Position: {this.state.attackedPosition}</h2>
        <div id="current-board">
          <div value={[0, 0]} onClick={this.selectSoldier} className="square">
            {this.state.currentBoard[0][0]}
          </div>
          <div value={[0, 1]} onClick={this.selectSoldier} className="square">
            {this.state.currentBoard[0][1]}
          </div>
          <div value={[0, 2]} onClick={this.selectSoldier} className="square">
            {this.state.currentBoard[0][2]}
          </div>
          <div value={[1, 0]} onClick={this.selectSoldier} className="square">
            {this.state.currentBoard[1][0]}
          </div>
          <div value={[1, 1]} onClick={this.selectSoldier} className="square">
            {this.state.currentBoard[1][1]}
          </div>
          <div value={[1, 2]} onClick={this.selectSoldier} className="square">
            {this.state.currentBoard[1][2]}
          </div>
          <div value={[2, 0]} onClick={this.selectSoldier} className="square">
            {this.state.currentBoard[2][0]}
          </div>
          <div value={[2, 1]} onClick={this.selectSoldier} className="square">
            {this.state.currentBoard[2][1]}
          </div>
          <div value={[2, 2]} onClick={this.selectSoldier} className="square">
            {this.state.currentBoard[2][2]}
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<UntilTheLast />, document.getElementById("untilthelast"));
