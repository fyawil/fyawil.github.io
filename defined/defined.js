class Defined extends React.Component {
  constructor(props){
  super(props);
}

render(){
        return (
            <div>
              <h1>Defined</h1>
              <VoiceOfTheCustomer />
            </div>
);
    }
  }

class VoiceOfTheCustomer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      para: "",
      parameters: []
    };

    this.handleChangePara = this.handleChangePara.bind(this);
    this.addPara = this.addPara.bind(this);
  }

  handleChangePara(event) {
    this.setState({
      para: event.target.value
    })
  }

  addPara() {
    this.setState({
      parameters: [...this.state.parameters, this.state.para]
    })
  }
  
  render(){
    return (
    <div>
      <input type="text" placeholder="What does the customer want?" onChange={this.handleChangePara}></input>
      <button onClick={this.addPara}>Add</button>
      <Tree rootOfQuality={this.state.parameters} />
    </div>
    )
}


}

class Tree extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
      <h2>{this.props.rootOfQuality[0]}</h2>
      <h2>{this.props.rootOfQuality[1]}</h2>
      <h2>{this.props.rootOfQuality[2]}</h2>
      <h2>{this.props.rootOfQuality[3]}</h2>
      </div>
    )
  }
}




ReactDOM.render(<Defined />, document.getElementById('defined'));
