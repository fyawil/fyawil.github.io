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
              <p id="tagline"><em><strong>Where the World's web views Wonders</strong></em></p>
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
      isPc3Shown: false,
      pc1: 1,
      pc2: 2,
      pc3: 1
    }

    this.hideShowPc1 = this.hideShowPc1.bind(this);
    this.hideShowPc2 = this.hideShowPc2.bind(this);
    this.hideShowPc3 = this.hideShowPc3.bind(this);
    this.navPcsLeft = this.navPcsLeft.bind(this);
    this.navPcsRight = this.navPcsRight.bind(this);

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

  pieces = {
    1: {
      name: "Flower of Fire",
      description: 
      "Forged in fire, the flower brings out the feelings of growth, passion and persistence. It is a wonder, from death comes life",
      price: "19.99"
    },
    2: {
      name: "Sunset & Summer Scenes",
      description: 
      "The setting of the sun signifies serenity, soothing and separation from the toils of the day. Steeped in gratitude, one goes to sleep",
      price: "24.99"
    }
  }

  navPcsLeft() {
    this.setState({      
      pc1: this.state.pc1>1?this.state.pc1-1:Object.keys(this.pieces).length,
      pc2: this.state.pc2>1?this.state.pc2-1:Object.keys(this.pieces).length,
      pc3: this.state.pc3>1?this.state.pc3-1:Object.keys(this.pieces).length
       });
  }
  navPcsRight() {
    this.setState({      
      pc1: this.state.pc1<Object.keys(this.pieces).length?this.state.pc1+1:1,
      pc2: this.state.pc2<Object.keys(this.pieces).length?this.state.pc2+1:1,
      pc3: this.state.pc3<Object.keys(this.pieces).length?this.state.pc3+1:1
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

              <div id="piece1" style={{width:`${this.state.isPc1Shown?"300%":"100%"}`, height:`${this.state.isPc1Shown?"90%":"70%"}`}} onClick={this.hideShowPc1}>
              <img id="image1" src={`./${this.state.pc1}.jpg`} alt="Image 1" />
              <p id="description1" style={this.state.isPc1Shown?show:hide}>
                {this.pieces[this.state.pc1].description}
                <br></br>
                <br></br>
                {`£${this.pieces[this.state.pc1].price}`} 
              </p>
              </div>
              <div id="piece2" style={{width:`${this.state.isPc2Shown?"300%":"100%"}`, height:`${this.state.isPc2Shown?"90%":"70%"}`}} onClick={this.hideShowPc2}>
              <img id="image2" src={`./${this.state.pc2}.jpg`} alt="Image 2" />
              <p id="description2" style={this.state.isPc2Shown?show:hide}>
                {this.pieces[this.state.pc2].description}  
                <br></br>
                <br></br>
                {`£${this.pieces[this.state.pc2].price}`}            
              </p>
              </div>
              <div id="piece3" style={{width:`${this.state.isPc3Shown?"300%":"100%"}`, height:`${this.state.isPc3Shown?"90%":"70%"}`}} onClick={this.hideShowPc3}>
              <img id="image3" src={`./${this.state.pc3}.jpg`} alt="Image 3" />
              <p id="description3" style={this.state.isPc3Shown?show:hide}>
                {this.pieces[this.state.pc3].description}    
                <br></br>
                <br></br>
                {`£${this.pieces[this.state.pc3].price}`}      
              </p>
              </div>
            </div>
            <div id="nav_pcs">
              <div id="prev"><button className="nav_pcs_button" onClick={this.navPcsLeft}>{"<"}</button><h3>Previous</h3></div>
              <div id="next"><button className="nav_pcs_button" onClick={this.navPcsRight}>{">"}</button><h3>Next</h3></div>  
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
                <a href="mailto:fawil@live.co.uk" target="_blank"><img id="email" src="./email.png" alt="Email" /></a>
                <a href="tel:+4400000000000" target="_blank"><img id="tel" src="./tel.png" alt="Telephone" /></a>
              </div>
          </div>
);
    }
}


ReactDOM.render(<AmalArts />, document.getElementById('amalarts'));
