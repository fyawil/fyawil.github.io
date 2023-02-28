class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      toDos: [],
    };

    this.handleChange = this.handleChange.bind(this)
    this.addToDo = this.addToDo.bind(this)
    this.deleteToDo = this.deleteToDo.bind(this)
  }

  handleChange(event){
    this.setState({
        input: event.target.value
    })
  }

  addToDo(event){
    if(event.key === "Enter" && !this.state.toDos.includes(this.state.input) && this.state.input !== ""){
        this.setState(state => ({
            toDos: [...state.toDos, state.input]
          }))
    }
  }

  deleteToDo(event){
    let newArray = [...this.state.toDos]
    this.setState({
        toDos: newArray.filter(toDo => toDo != event.target.getAttribute("value"))
    })
  }

  render() {
    return (
    <div>
        <h1 id="header">Do:</h1>
        <input id="text-field" value={this.state.input} type="text" 
        onChange={this.handleChange} 
        onKeyDown={this.addToDo}></input>
        <div>
            <ul>{this.state.toDos.map(
                toDo => 
                <div>
                    <li className="todos">{toDo}</li>
                    <div className="deletes" value={toDo} onClick={this.deleteToDo}>&nbsp;CLEAR</div>
                </div>)}
            </ul>
        </div>
    </div>
    );
  }
}

ReactDOM.render(<ToDo />, document.getElementById("todo"));
