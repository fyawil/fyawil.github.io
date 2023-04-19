class IncAndPaper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-fluid">
        <h1>Inc & Paper</h1>
      </div>
    )
  }
}

ReactDOM.render( <IncAndPaper />, document.getElementById('incAndPaper') );