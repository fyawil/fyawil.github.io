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
        <div id="projects">
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
      isShown: false
    }

    this.show = this.show.bind(this)
  } 

  show() {
    this.setState({      
      isShown: !this.state.isShown
    });
  }

    render() {
        return (
          <div id="customer_focus" onClick={this.show}>
            {this.state.isShown?null:<h2>Food & Drink</h2>}
            {this.state.isShown?<p>Coming Soon</p>:null}
          </div>
);
    }
}


//Contain useful tools to automate life
class Automation extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isShown: false
    }

    this.show = this.show.bind(this)
  } 

  show() {
    this.setState({      
      isShown: !this.state.isShown
    });
  }

    render() {
        return (
          <div id="automation" onClick={this.show}>
            {this.state.isShown?null:<h2>Fitness</h2>}
            {this.state.isShown?<div id="workout_generator"><WorkoutGenerator/></div>:null}
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
          <div id="workout_generator">
            <a href="./workout_generator/workout_generator.html"><h3>Workout Generator</h3></a>
            <a href="./timer/timer.html"><h3>Timer</h3></a>
          </div>
);
    }
}


//Contain useful tools to optimise the value chain
class ValueChainManagement extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      isShown: false
    }

    this.show = this.show.bind(this);
  } 

  show() {
    this.setState({      
      isShown: !this.state.isShown
    });
  }

    render() {
        return (
          <div id="value_chain_management" onClick={this.show}>
            {this.state.isShown?null:<h2>Business</h2>}
            {this.state.isShown?<a href="./amalarts/amalarts.html"><h3>Amal Arts</h3></a>:null}
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
          <div id="motivation">
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
      isShown: ""
    }

    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);

  } 

  show(event) {
    this.setState({      
      isShown: event.target.getAttribute("value")
    });
  }

  hide() {
    this.setState({      
      isShown: ""
    });
  }

    render() {
        return (
<div id="my_story">
          <div id="my_story0">
            <h1>My Story</h1>
          </div>
          <div id="my_story1">
              {this.state.isShown == "1"?null:<h3 value="1" onClick={this.show} id="my_story_header1">Parents exit Homeland</h3>}
              {this.state.isShown == "1"?
              <p onClick={this.hide} id="my_story_content1">
                <strong>Parents exit Somalia (ca. 1990)</strong>
                <br></br><br></br>
                My parents left our homeland Somalia due to genocide, before the full-scale civil war broke out
              </p>:
              null}
          </div>
          <div id="my_story2">
              {this.state.isShown == "2"?null:<h3 value="2" onClick={this.show} id="my_story_header2">Birth</h3>}
              {this.state.isShown == "2"?
              <p onClick={this.hide} id="my_story_content2">
                <strong>Born in Aalborg, DK (1991)</strong>
                <ul>
                  <li>Born to Fowzia Abdulle Mohamed and Yusuf Awil Dirir</li>
                  <li>Born Fuad Yusuf Awil Dirir Faahiye Ismaaciil Isaaq</li>
                  <li>From Wacays Idarays, from Sacad Yoonis, from Habar Yoonis of the Isaaq clan of Somaliland</li>
                  <li>Raised in DK until we departed for the UK when I was 12</li>
                </ul>
              </p>:
              null}
          </div>
          <div id="my_story3">
              {this.state.isShown == "3"?null:<h3 value="3" onClick={this.show} id="my_story_header3">GCSE's</h3>}
              {this.state.isShown == "3"?
              <div onClick={this.hide} id="my_story_content3">
                <p><strong>GCSE's at Langleywood School, UK (2006-2007)</strong></p>
                <table>
                  <tr>
                    <th>Subject</th>
                    <th>Grade</th>
                  </tr>
                  <tr>
                    <td>Mathematics</td>
                    <td>A*</td>
                  </tr>
                  <tr>
                    <td>Science</td>
                    <td>AA</td>
                  </tr>
                  <tr>
                    <td>English/English Literature</td>
                    <td>AA</td>
                  </tr>   
                  <tr>
                    <td>Business & Communication Systems</td>
                    <td>B</td>
                  </tr>        
                  <tr>
                    <td>History</td>
                    <td>B</td>
                  </tr>      
                  <tr>
                    <td>Geography</td>
                    <td>B</td>
                  </tr>      
                  <tr>
                    <td>Religious Studies</td>
                    <td>B</td>
                  </tr>
                  <tr>
                    <td>Physical Education</td>
                    <td>D</td>
                  </tr>            
                </table>
              </div>:
                null}
          </div>
          <div id="my_story4">
              {this.state.isShown == "4"?null:<h3 value="4" onClick={this.show} id="my_story_header4">GCE's</h3>}
              {this.state.isShown == "4"?
              <div onClick={this.hide} id="my_story_content4">
                <p><strong>GCE's at Slough Grammar School, UK (2007-2009)</strong></p>
                <table>
                  <tr>
                    <th>Subject</th>
                    <th>Grade</th>
                  </tr>
                  <tr>
                    <td>Mathematics</td>
                    <td>C</td>
                  </tr>
                  <tr>
                    <td>Business Studies</td>
                    <td>C</td>
                  </tr>
                  <tr>
                    <td>Biology</td>
                    <td>D</td>
                  </tr>                
                </table>
              </div>:
              null}
          </div>
          <div id="my_story5">
              {this.state.isShown == "5"?null:<h3 value="5" onClick={this.show} id="my_story_header5">Logistics</h3>}
              {this.state.isShown == "5"?
              <p onClick={this.hide} id="my_story_content5">
                <strong>Logistics at Royal Mail, UK (2011-2014)</strong>
                <ul>
                  <li>Safety and security checks prevented accidents and theft</li>
                  <li>Intermittently lead inbound and outbound logistics team</li>
                  <li>Trained new starters</li>
                  <li>Learned the value of hard work vis-a-vis process optimisation</li>
                </ul>                
              </p>:
              null}
          </div>
          <div id="my_story6">
              {this.state.isShown == "6"?null:<h3 value="6" onClick={this.show} id="my_story_header6">Value Chain Management BA</h3>}
              {this.state.isShown == "6"?
              <p onClick={this.hide} id="my_story_content6">
                <strong>Value Chain Management BA at VIA University College, DK (2014-2018)</strong>
                <ul>
                  <li>Studied and practised how to manage flow of communication, materials and funds</li>
                  <li>Achieved the UK equivalent of a 1st (grade average 11.18, on a scale from -3 to 12)</li>
                  <li>Gained much practical experience assisting companies on issues from raw materials to end user</li>
                  <li>Strategy, Forecasting, Purchasing, Inventory, Production, Quality, Marketing Management and more</li>
                </ul>       
              </p>:
              null}
          </div>
          <div id="my_story7" >
              {this.state.isShown == "7"?null:<h3 value="7" onClick={this.show} id="my_story_header7">Business Analysis</h3>}
              {this.state.isShown == "7"?
              <p onClick={this.hide} id="my_story_content7">
                <strong>Business Analysis at H.P. Industrial, DK (2016)</strong>
                <ul>
                  <li>Visual Management reduced waste in physical processes</li>
                  <li>Facility Layout Planning slashed total distance travelled by staff members</li>
                  <li>Inventory Management prevented stockouts and improved service level</li>
                  <li>Total Productive Maintenance increased OEE</li>
                </ul>
              </p>:
              null}
          </div>
          <div id="my_story8">
              {this.state.isShown == "8"?null:<h3 value="8" onClick={this.show} id="my_story_header8">Customer Service</h3>}
              {this.state.isShown == "8"?
              <p onClick={this.hide} id="my_story_content8">
                <strong>Customer Service at Arvato, UK (2019-present)</strong>
                <ul>
                  <li>High-performing, senior Customer Service Advisor</li>
                  <li>Secured coverage of the communication channels with various systems</li>
                  <li>Conducted User Interface quality audits</li>
                  <li>Improved quality, and sped up service and training through template system</li>
                </ul>
                </p>:
                null}

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
             <a href="https://github.com/fyawil" target="blank"><img id="github" src="./github.png" alt="Github" /></a>
             <a href="https://www.linkedin.com/in/fyawil" target="blank"><img id="linkedin" src="./linkedin.png" alt="LinkedIn" /></a>
            </div>
          </div>
);
    }
}


ReactDOM.render(<Index />, document.getElementById('index'));
