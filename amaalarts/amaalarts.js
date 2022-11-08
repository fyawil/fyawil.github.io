class AmaalArts extends React.Component {
  constructor(props) {
    super(props)
  } 

    render() {
        return (
            <div id="main_page">
{/*use bootstrap!!*/}
              <h1>Amaal Arts</h1>
              <h2>Inspirational Quote</h2>
              <p><em>Detailed description of website</em></p>
              <div>Image 1</div>
              <div>Image 2</div>
              <div>Image 3</div>
              <Links />
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
            <div>
             <nav id="links">
              <a href="mailto:someone@example.com"><img id="email" src="./email.png" alt="Email" /></a>
             </nav>
            </div>
          </div>
);
    }
}


ReactDOM.render(<AmaalArts />, document.getElementById('amaalarts'));
