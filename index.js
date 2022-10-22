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
          <h1 id="header">Projects</h1>
        </div>
);
    }
}

//Contain useful tools to define quality in the eyes of the customer
class CustomerFocus extends React.Component {
  constructor(props) {
    super(props)
  } 

    render() {
        return (
          <div>
          <h2>Customer Focus</h2>
          </div>
);
    }
}


//Contain useful tools to automate life
class Automation extends React.Component {
  constructor(props) {
    super(props)
  } 

    render() {
        return (
          <div>
            <div id="automation">
            <h2 id="header3">Automation</h2>
            <div id="workout_generator"><WorkoutGenerator/></div>
            </div>
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
          <a href="./workout_generator/workout_generator.html">Workout Generator</a>
          </div>
);
    }
}


//Contain useful tools to optimise the value chain
class ValueChainManagement extends React.Component {
  constructor(props) {
    super(props)
  } 

    render() {
        return (
          <div>
          <h2>Value Chain Management</h2>
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
          <h2></h2>
          </div>
);
    }
}

class MyStory extends React.Component {
  constructor(props) {
    super(props)
  } 

    render() {
        return (
          <div>
          <h2></h2>
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
          </div>
);
    }
}


ReactDOM.render(<Index />, document.getElementById('index'));
