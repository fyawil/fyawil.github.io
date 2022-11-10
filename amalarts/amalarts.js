class AmalArts extends React.Component {
  constructor(props) {
    super(props)
  } 

    render() {
        return (
            <div id="main_page">
              <title>Amal Arts</title>
              <h3 id="quote"><em>"Happy little accidents" - Bob Ross</em></h3>
              <h1 id="header">Amal Arts</h1>
              <p id="tagline"><em>Where the World's web views Wonders</em></p>
              <Pieces />
              <Links />
            </div>
);
    }
}

class Pieces extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isPc1Shown: false,
      isPc2Shown: false,
      isPc3Shown: false
    }

    this.hideShowPc1 = this.hideShowPc1.bind(this);
    this.hideShowPc2 = this.hideShowPc2.bind(this);
    this.hideShowPc3 = this.hideShowPc3.bind(this);

  } 

  hideShowPc1() {
    this.setState({      
      isPc1Shown: !this.state.isPc1Shown
       });
  }
  hideShowPc2() {
    this.setState({      
      isPc2Shown: !this.state.isPc2Shown
       });
  }
  hideShowPc3() {
    this.setState({      
      isPc3Shown: !this.state.isPc3Shown
       });
  }

    render() {

      const hide = {
display: "none"
      }
      const show = {
        display: "block"
              }

        return (
          <div>
            <div id="pieces">
              <div id="piece1" style={{width:`${this.state.isPc1Shown?"300%":"100%"}`, height:`${this.state.isPc1Shown?"90%":"70%"}`}} onClick={this.hideShowPc1}><div id="image1">Image 1</div>
              <p id="description1" style={this.state.isPc1Shown?show:hide}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
              </div>
              <div id="piece2" style={{width:`${this.state.isPc2Shown?"300%":"100%"}`, height:`${this.state.isPc2Shown?"90%":"70%"}`}} onClick={this.hideShowPc2}><div id="image2">Image 2</div>
              <p id="description2" style={this.state.isPc2Shown?show:hide}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              </div>
              <div id="piece3" style={{width:`${this.state.isPc3Shown?"300%":"100%"}`, height:`${this.state.isPc3Shown?"90%":"70%"}`}} onClick={this.hideShowPc3}><div id="image3">Image 3</div>
              <p id="description3" style={this.state.isPc3Shown?show:hide}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              </div>
            </div>
          </div>
);
    }
}

class Links extends React.Component {
  constructor(props) {
    super(props)
  } 

    render() {
        return (
          <div>
              <div id="links">
                  <img id="email" src="./email.png" alt="Email" />
              </div>
          </div>
);
    }
}


ReactDOM.render(<AmalArts />, document.getElementById('amalarts'));
