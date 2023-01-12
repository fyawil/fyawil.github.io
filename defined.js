class Defined extends React.Component {
  constructor(props){
  super(props);
}

render(){
        return (
            <div id="main">
              <h1 id="header">Defined</h1>
              <Level1Definition/>
            </div>
);
    }
  }

class Level1Definition extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      level1QualityPara: "",
      level1QualityParameters: []
    };

    this.handleChangeLevel1QualityPara = this.handleChangeLevel1QualityPara.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.addLevel1QualityPara = this.addLevel1QualityPara.bind(this);
  }

  handleChangeLevel1QualityPara(event) {
    this.setState({
      level1QualityPara: event.target.value
    })
  }

  handleKeyDown(event) {
    if (event.key == 'Enter') {
      this.addLevel1QualityPara();
    }
  }

  addLevel1QualityPara() {
    this.setState({
      level1QualityParameters: [...this.state.level1QualityParameters, this.state.level1QualityPara]
    })
  }
  
  render(){
    return (
    <div id="level1def">
      <input id="level1definer" type="text" placeholder="What does the customer want?" onChange={this.handleChangeLevel1QualityPara} onKeyDown={this.handleKeyDown}></input>
      <Level2Definition level1QualityParameters={this.state.level1QualityParameters} level1QualityPara={this.state.level1QualityPara} />
    </div>
    )
}


}

class Level2Definition extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      level2QualityPara: "",
      level2QualityParameters: []
    }

    this.handleChangeLevel2QualityPara = this.handleChangeLevel2QualityPara.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.addlevel2QualityPara = this.addlevel2QualityPara.bind(this);
  }

  handleChangeLevel2QualityPara(event) {
    this.setState({
      level2QualityPara: event.target.value
    })
  }

  handleKeyDown(event) {
    if (event.key == 'Enter') {
      this.addlevel2QualityPara(event.target.id == "firstLevel1QualityParameterDefiner"?
                    this.props.level1QualityParameters[0]:
                    event.target.id == "secondLevel1QualityParameterDefiner"?
                    this.props.level1QualityParameters[1]:
                    event.target.id == "thirdLevel1QualityParameterDefiner"?
                    this.props.level1QualityParameters[2]:
                    event.target.id == "fourthLevel1QualityParameterDefiner"?
                    this.props.level1QualityParameters[3]:
                    event.target.id == "fifthLevel1QualityParameterDefiner"?
                    this.props.level1QualityParameters[4]:
                    "Quality parameter does not exist...");  
      this.setState({
                level2QualityPara: ""
                    })
    }
  }

  addlevel2QualityPara(level1QualityPara) {
    if(this.state.level2QualityPara != this.state.level2QualityParameters[this.state.level2QualityParameters.length - 1]){
    this.setState({
      level2QualityParameters: [...this.state.level2QualityParameters, [level1QualityPara, this.state.level2QualityPara]]
    })      
    }

  }


  render(){
    return (
      <div id="level2def">

      <div>
        <div>
          {this.props.level1QualityParameters.length >= 1 && 
          <div>
            <h2 id="firstLevel1QualityParameter">{this.props.level1QualityParameters[0]}</h2> 
            <input type="text" id="firstLevel1QualityParameterDefiner" 
            placeholder={`How could '${this.props.level1QualityParameters[0]}' be achieved?`} 
            onChange={this.handleChangeLevel2QualityPara} onKeyDown={this.handleKeyDown}></input> 
          </div>
          }
        </div>
        <div>
          {this.props.level1QualityParameters.length >= 2 && 
          <div>
            <h2 id="secondLevel1QualityParameter">{this.props.level1QualityParameters[1]}</h2> 
            <input type="text" id="secondLevel1QualityParameterDefiner" 
            placeholder={`How could '${this.props.level1QualityParameters[1]}' be achieved?`} 
            onChange={this.handleChangeLevel2QualityPara} onKeyDown={this.handleKeyDown}></input> 
          </div>
          }
        </div>
        <div>
          {this.props.level1QualityParameters.length >= 3 && 
          <div>
            <h2 id="thirdLevel1QualityParameter">{this.props.level1QualityParameters[2]}</h2> 
            <input type="text" id="thirdLevel1QualityParameterDefiner" 
            placeholder={`How could '${this.props.level1QualityParameters[2]}' be achieved?`} 
            onChange={this.handleChangeLevel2QualityPara} onKeyDown={this.handleKeyDown}></input> 
          </div>
          }
        </div>
        <div>
          {this.props.level1QualityParameters.length >= 4 && 
          <div>
            <h2 id="fourthLevel1QualityParameter">{this.props.level1QualityParameters[3]}</h2> 
            <input type="text" id="fourthLevel1QualityParameterDefiner"
            placeholder={`How could '${this.props.level1QualityParameters[3]}' be achieved?`} 
            onChange={this.handleChangeLevel2QualityPara} onKeyDown={this.handleKeyDown}></input> 
          </div>
          }
        </div>
        <div>
          {this.props.level1QualityParameters.length >= 5 && 
          <div>
            <h2 id="fifthLevel1QualityParameter">{this.props.level1QualityParameters[4]}</h2> 
            <input type="text" id="fifthLevel1QualityParameterDefiner"
            placeholder={`How could '${this.props.level1QualityParameters[4]}' be achieved?`} 
            onChange={this.handleChangeLevel2QualityPara} onKeyDown={this.handleKeyDown}></input> 
          </div>
          }
        </div>
      </div>

      <div>
      <Level2Parameters level2QualityParameters= {this.state.level2QualityParameters} level1QualityParameters= {this.props.level1QualityParameters}/>
      </div>

      </div>
    )
  }
}

class Level2Parameters extends React.Component {
  constructor(props){
    super(props)
  }


  render(){

    let firstLevel1QualityParametersLevel2Parameters = [...this.props.level2QualityParameters]
                            .filter(level2QualityPara => level2QualityPara[0] == this.props.level1QualityParameters[0])
                            .map(level2QualityPara => level2QualityPara[1])
                            .join(" ")
    let secondLevel2QualityParametersLevel2Parameters = [...this.props.level2QualityParameters]
                            .filter(level2QualityPara => level2QualityPara[0] == this.props.level1QualityParameters[1])
                            .map(level2QualityPara => level2QualityPara[1])
                            .join(" ")
    let thirdLevel1QualityParametersLevel2Parameters = [...this.props.level2QualityParameters]
                            .filter(level2QualityPara => level2QualityPara[0] == this.props.level1QualityParameters[2])
                            .map(level2QualityPara => level2QualityPara[1])
                            .join(" ");
    let fourthLevel1QualityParametersLevel2Parameters = [...this.props.level2QualityParameters]
                            .filter(level2QualityPara => level2QualityPara[0] == this.props.level1QualityParameters[3])
                            .map(level2QualityPara => level2QualityPara[1])
                            .join(" ")
    let fifthLevel1QualityParametersLevel2Parameters = [...this.props.level2QualityParameters]
                            .filter(level2QualityPara => level2QualityPara[0] == this.props.level1QualityParameters[4])
                            .map(level2QualityPara => level2QualityPara[1])
                            .join(" ")

    return (
      <div id="level2paras">
        <h3 id="firstLevel1QualityParametersLevel2Parameters">{firstLevel1QualityParametersLevel2Parameters}</h3>
        <h3 id="secondLevel2QualityParametersLevel2Parameters">{secondLevel2QualityParametersLevel2Parameters}</h3>
        <h3 id="thirdLevel1QualityParametersLevel2Parameters">{thirdLevel1QualityParametersLevel2Parameters}</h3>
        <h3 id="fourthLevel1QualityParametersLevel2Parameters">{fourthLevel1QualityParametersLevel2Parameters}</h3>
        <h3 id="fifthLevel1QualityParametersLevel2Parameters">{fifthLevel1QualityParametersLevel2Parameters}</h3>
        <Level3Parameters/>
      </div>
    )
  }
}

class Level3Parameters extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div id="level3paras">
      </div>
    )
  }
}





ReactDOM.render(<Defined />, document.getElementById('defined'));
