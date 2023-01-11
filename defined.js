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
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.addPara = this.addPara.bind(this);
  }

  handleChangePara(event) {
    this.setState({
      para: event.target.value
    })
  }

  handleKeyDown(event) {
    if (event.key == 'Enter') {
      this.addPara();
    }
  }

  addPara() {
    this.setState({
      parameters: [...this.state.parameters, this.state.para]
    })
  }
  
  render(){
    return (
    <div>
      <input type="text" placeholder="What does the customer want?" onChange={this.handleChangePara} onKeyDown={this.handleKeyDown}></input>
      <Roots rootOfQuality={this.state.parameters} para={this.state.para} />
    </div>
    )
}


}

class Roots extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      elabo: "",
      elaborations: []
    }

    this.handleChangeElabo = this.handleChangeElabo.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.addElabo = this.addElabo.bind(this);
  }

  handleChangeElabo(event) {
    this.setState({
      elabo: event.target.value
    })
  }

  handleKeyDown(event) {
    if (event.key == 'Enter') {
      this.addElabo(event.target.id == "firstLevelOneFactor"?
                    this.props.rootOfQuality[0]:
                    event.target.id == "secondLevelOneFactor"?
                    this.props.rootOfQuality[1]:
                    event.target.id == "thirdLevelOneFactor"?
                    this.props.rootOfQuality[2]:
                    event.target.id == "fourthLevelOneFactor"?
                    this.props.rootOfQuality[3]:
                    event.target.id == "fifthLevelOneFactor"?
                    this.props.rootOfQuality[4]:
                    "Factor does not exist...");  
      this.setState({
                elabo: ""
                    })
    }
  }

  addElabo(levelOneFactor) {
    if(this.state.elabo != this.state.elaborations[this.state.elaborations.length - 1]){
    this.setState({
      elaborations: [...this.state.elaborations, [levelOneFactor, this.state.elabo]]
    })      
    }

  }


  render(){
    return (
      <div>

      <div>
        <div>
          {this.props.rootOfQuality.length >= 1 && 
          <div>
            <h2>{this.props.rootOfQuality[0]}</h2> 
            <input type="text" id="firstLevelOneFactor" 
            placeholder={`How could '${this.props.rootOfQuality[0]}' be achieved?`} 
            onChange={this.handleChangeElabo} onKeyDown={this.handleKeyDown}></input> 
            <h3>{}</h3>
          </div>
          }
        </div>
        <div>
          {this.props.rootOfQuality.length >= 2 && 
          <div>
            <h2>{this.props.rootOfQuality[1]}</h2> 
            <input type="text" id="secondLevelOneFactor" 
            placeholder={`How could '${this.props.rootOfQuality[1]}' be achieved?`} 
            onChange={this.handleChangeElabo} onKeyDown={this.handleKeyDown}></input> 
          </div>
          }
        </div>
        <div>
          {this.props.rootOfQuality.length >= 3 && 
          <div>
            <h2>{this.props.rootOfQuality[2]}</h2> 
            <input type="text" id="thirdLevelOneFactor" 
            placeholder={`How could '${this.props.rootOfQuality[2]}' be achieved?`} 
            onChange={this.handleChangeElabo} onKeyDown={this.handleKeyDown}></input> 
          </div>
          }
        </div>
        <div>
          {this.props.rootOfQuality.length >= 4 && 
          <div>
            <h2>{this.props.rootOfQuality[3]}</h2> 
            <input type="text" id="fourthLevelOneFactor"
            placeholder={`How could '${this.props.rootOfQuality[3]}' be achieved?`} 
            onChange={this.handleChangeElabo} onKeyDown={this.handleKeyDown}></input> 
          </div>
          }
        </div>
        <div>
          {this.props.rootOfQuality.length >= 5 && 
          <div>
            <h2>{this.props.rootOfQuality[4]}</h2> 
            <input type="text" id="fifthLevelOneFactor"
            placeholder={`How could '${this.props.rootOfQuality[4]}' be achieved?`} 
            onChange={this.handleChangeElabo} onKeyDown={this.handleKeyDown}></input> 
          </div>
          }
        </div>
      </div>

      <div>
      <Branches elaborations= {this.state.elaborations} rootOfQuality= {this.props.rootOfQuality}/>
      </div>

      </div>
    )
  }
}

class Branches extends React.Component {
  constructor(props){
    super(props)
  }


  render(){

    let firstFactorElabos = [...this.props.elaborations]
                            .filter(elabo => elabo[0] == this.props.rootOfQuality[0])
                            .map(elabo => elabo[1])
                            .join(" ")
    let secondFactorElabos = [...this.props.elaborations]
                            .filter(elabo => elabo[0] == this.props.rootOfQuality[1])
                            .map(elabo => elabo[1])
                            .join(" ")
    let thirdFactorElabos = [...this.props.elaborations]
                            .filter(elabo => elabo[0] == this.props.rootOfQuality[2])
                            .map(elabo => elabo[1])
                            .join(" ");
    let fourthFactorElabos = [...this.props.elaborations]
                            .filter(elabo => elabo[0] == this.props.rootOfQuality[3])
                            .map(elabo => elabo[1])
                            .join(" ")
    let fifthFactorElabos = [...this.props.elaborations]
                            .filter(elabo => elabo[0] == this.props.rootOfQuality[4])
                            .map(elabo => elabo[1])
                            .join(" ")

    return (
      <div>
        <h3>{firstFactorElabos}</h3>
        <h3>{secondFactorElabos}</h3>
        <h3>{thirdFactorElabos}</h3>
        <h3>{fourthFactorElabos}</h3>
        <h3>{fifthFactorElabos}</h3>
      </div>
    )
  }
}





ReactDOM.render(<Defined />, document.getElementById('defined'));
