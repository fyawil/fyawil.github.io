class Defined extends React.Component{
  constructor(props){
    super(props)
}

render(){
  return (
    <div>
      <h1>Defined</h1>
      <Level1Definer/>
    </div>
  )
}
}

//This component allows user to input user needs
class Level1Definer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      //level1def holds what the user inputs as a Level1 parameter
      level1def: "",
      //level2paras holds all level1 paras
      level1paras: []
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
}

// This updates level1def state any time the level1definer input field is changed
handleChange(event){
  this.setState({
    level1def: event.target.value
  })
}

// This adds level1def to level1paras if user presses enter and the input is not already included in level1paras or empty
handleKeyDown(event){
  if(event.key == "Enter" && !this.state.level1paras.includes(this.state.level1def.trim()) && this.state.level1def != ""){
    this.setState({
      level1paras: [...this.state.level1paras, this.state.level1def]
    })
  }
}

render(){
  return (
    <div id="levels">
      <div id="level1definer">
        <input type="text" placeholder="What does the user need?" onChange={this.handleChange} onKeyDown={this.handleKeyDown}></input>
      </div>
      {/*level1paras are passed to Level2Definer*/}
      <Level2Definer id="level1andlevel2andlevel3" level1paras={this.state.level1paras}/>
    </div>
  )
}
}

//This component allows user to input parameters to further specify level1 user needs
class Level2Definer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      level2def: "",
      level2paras: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
}

// This updates level2def state any time the level2definer input field is changed
handleChange(event){
  this.setState({
    level2def: event.target.value
  })
}

// This adds level2def to level2paras if user presses enter and the input is not already included in level2paras or empty
handleKeyDown(event){
  if(event.key == "Enter" && !this.state.level2paras.includes(this.state.level2def.trim()) && this.state.level2def != ""){
    this.setState({
      level2paras: [...this.state.level2paras, this.state.level2def]
    })
  }
}

render(){

  return (
    <div id="level1andlevel2andlevel3">
      <div id="level1paras">
        {window.innerWidth <= 414? <hr></hr>: null}
        {this.props.level1paras
      .map(
        para => 
        <React.Fragment>
          <h2>{para}</h2>
          <input type="text" placeholder={"What is " + para + "?"} 
            onChange={this.handleChange} onKeyDown={this.handleKeyDown}></input>
        </React.Fragment>     
      )}
      </div>
      <Level3Definer id="level2andlevel3" level2paras={this.state.level2paras} />
    </div>
  )
}
}

//The Level3 component allows user to input parameters to measure level3 quality parameters objectively
class Level3Definer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      level3def: "",
      level3paras: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
}

// This updates level3def state any time the level3definer input field is changed
handleChange(event){
  this.setState({
    level3def: event.target.value
  })
}

// This adds level2def to level2paras if user presses enter and the input is not already included in level2paras or empty
handleKeyDown(event){
  if(event.key == "Enter" && !this.state.level3paras.includes(this.state.level3def.trim()) && this.state.level3def != ""){
    this.setState({
      level3paras: [...this.state.level3paras, this.state.level3def]
    })
  }
}

render(){
  return (
    <div id="level2andlevel3">
      <div id="level2paras">
        {window.innerWidth <= 414? <hr></hr>: null}
        {this.props.level2paras
      .map(
        para => 
        <React.Fragment>
          <h2>{para}</h2>
          <input type="text" placeholder={"What is " + para + "?"}
            onChange={this.handleChange} onKeyDown={this.handleKeyDown}></input>
        </React.Fragment>     
      )}
      </div>
      <Level3Parameters id="level3paras" level3paras={this.state.level3paras} />
    </div>
  )
}
}

class Level3Parameters extends React.Component{
  constructor(props){
    super(props)
}

render(){
  return (
    <div>
      {window.innerWidth <= 414? <hr></hr>: null}
      {this.props.level3paras.map(para => <React.Fragment><h2>{para}</h2></React.Fragment>)}
    </div>
  )
}
}

ReactDOM.render(<Defined />, document.getElementById('defined'));
