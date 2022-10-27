class Index extends React.Component {
  constructor(props) {
    super(props)
  } 

    render() {
        return (
            <div id="main_page">
            <div id="nav_bar">
             <div id="projects"><Projects /></div>
             <div id="customer_focus"><CustomerFocus /></div>
             <div id="automation"><Automation /></div>
             <div id="value_chain_management"><ValueChainManagement /></div>
            </div>
              <div id="motivation"><Motivation /></div>
            <div id="my_story"><MyStory /> </div>  
            <div id="links"><Links />  </div>  
            </div>
);
    }
}

//Your CV
class Projects extends React.Component {
  constructor(props) {
    super(props)
  } 

    render() {
        return (
        <div>
          <h1>Projects</h1>
        </div>
);
    }
}

//Contain useful tools to define quality in the eyes of the customer
class CustomerFocus extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isCFShown: ""
    }

    this.show = this.show.bind(this)
    this.hide = this.hide.bind(this)
  } 

  show(event) {
    this.setState({      
      isCFShown: event.target.getAttribute("value")
    });
  }
  hide() {
    this.setState({      
      isCFShown: ""
    });
  }

    render() {
        return (
          <div id="customer_focus" value={true} onMouseEnter={this.show} onMouseLeave={this.hide}>
            {this.state.isCFShown?null:<h2>Customer Focus</h2>}
            {this.state.isCFShown?<p>Coming Soon</p>:null}
          </div>
);
    }
}


//Contain useful tools to automate life
class Automation extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isAutomationShown: ""
    }

    this.show = this.show.bind(this)
    this.hide = this.hide.bind(this)
  } 

  show(event) {
    this.setState({      
      isAutomationShown: event.target.getAttribute("value")
    });
  }
  hide() {
    this.setState({      
      isAutomationShown: ""
    });
  }

    render() {
        return (
          <div id="automation" value={true} onMouseEnter={this.show} onMouseLeave={this.hide}>
            {this.state.isAutomationShown?null:<h2>Fitness & Health</h2>}
            {this.state.isAutomationShown?<div id="workout_generator"><WorkoutGenerator/></div>:null}
          </div>
);
    }
}

class WorkoutGenerator extends React.Component {
  constructor(props) {
    super(props)
  } 

    render() {
        return (
          <div>
            <ul>
              <li><a href="./workout_generator/workout_generator.html"><h3>Workout Generator</h3></a></li>
            </ul>
          </div>
);
    }
}


//Contain useful tools to optimise the value chain
class ValueChainManagement extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      isVCMShown: ""
    }

    this.show = this.show.bind(this)
    this.hide = this.hide.bind(this)
  } 

  show(event) {
    this.setState({      
      isVCMShown: event.target.getAttribute("value")
    });
  }
  hide() {
    this.setState({      
      isVCMShown: ""
    });
  }

    render() {
        return (
          <div id="value_chain_management" value={true} onMouseEnter={this.show} onMouseLeave={this.hide}>
            {this.state.isVCMShown?null:<h2>Value Chain Management</h2>}
            {this.state.isVCMShown?<p>Coming Soon</p>:null}
          </div>
);
    }
}

class Motivation extends React.Component {
  constructor(props) {
    super(props)
  } 

    render() {
        return (
          <div>
              <h2>احْرِصْ عَلَى مَا يَنْفَعُكَ</h2>
              <h2>Be Keen Over What Will Benefit You</h2>
              <img id="tree" src="./tree.svg" alt="Tree" />
          </div>
);
    }
}

class MyStory extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isShown: "0"
    }

    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  } 

  show(event) {
    this.setState({      
      isShown: event.target.getAttribute("value")
    });
  }

  hide(event) {
    this.setState({      
      isShown: "0"
    });
  }

    render() {
        return (
<div id="my_story">
          <div id="my_story0">
            <h1>My Story</h1>
          </div>
          <div id="my_story1" value="1" onMouseEnter={this.show} onMouseLeave={this.hide}>
              {this.state.isShown == "1"?null:<h3 id="my_story_header1">Customer Service in UK - 2018</h3>}
              {this.state.isShown == "1"?<p id="my_story_content1">Customer Service at Arvato, UK</p>:null}
          </div>
          <div id="my_story2" value="2" onMouseEnter={this.show} onMouseLeave={this.hide}>
              {this.state.isShown == "2"?null:<h3 id="my_story_header2">Business Analysis in DK - 2016</h3>}
              {this.state.isShown == "2"?<p id="my_story_content2">Business Analysis at HP Industrial, DK</p>:null}
          </div>
          <div id="my_story3" value="3" onMouseEnter={this.show} onMouseLeave={this.hide}>
              {this.state.isShown == "3"?null:<h3 id="my_story_header3">Value Chain Management BA in DK - 2014</h3>}
              {this.state.isShown == "3"?<p id="my_story_content3">Value Chain Management BA in Aarhus, DK</p>:null}
          </div>
          <div id="my_story4" value="4" onMouseEnter={this.show} onMouseLeave={this.hide}>
              {this.state.isShown == "4"?null:<h3 id="my_story_header4">Logistics in UK - 2011</h3>}
              {this.state.isShown == "4"?<p id="my_story_content4">Logistics at Royal Mail, UK</p>:null}
          </div>
          <div id="my_story5" value="5" onMouseEnter={this.show} onMouseLeave={this.hide}>
              {this.state.isShown == "5"?null:<h3 id="my_story_header5">GCE's in UK - 2009</h3>}
              {this.state.isShown == "5"?<p id="my_story_content5">GCE's in Slough, United Kingdom</p>:null}
          </div>
          <div id="my_story6" value="6" onMouseEnter={this.show} onMouseLeave={this.hide}>
              {this.state.isShown == "6"?null:<h3 id="my_story_header6">GCSE's in UK - 2007</h3>}
              {this.state.isShown == "6"?<p id="my_story_content6">GCSE's in Slough, United Kingdom</p>:null}
          </div>
          <div id="my_story7" value="7" onMouseEnter={this.show} onMouseLeave={this.hide}>
              {this.state.isShown == "7"?null:<h3 id="my_story_header7">Born Fuad Yusuf Awil - 1991</h3>}
              {this.state.isShown == "7"?<p id="my_story_content7">Born and Raised in Aalborg, Denmark</p>:null}
          </div>
          <div id="my_story8" value="8" onMouseEnter={this.show} onMouseLeave={this.hide}>
              {this.state.isShown == "8"?null:<h3 id="my_story_header8">Parents exit Somalia - ca. 1990</h3>}
              {this.state.isShown == "8"?<p id="my_story_content8">My parents left our homeland Somalia due to civil unrest before my birth</p>:null}
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
          <h1>Links</h1>
          </div>
);
    }
}


ReactDOM.render(<Index />, document.getElementById('index'));
