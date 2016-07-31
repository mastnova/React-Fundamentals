import React from 'react';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'this is the text',
      cat: 0
    }
  }

  update(e) {
    this.setState({txt: e.target.value});
  }

  render() {
    let txt = this.props.txt;
    let cat = this.props.cat;
    return (
      <div data-cat={cat}>
        <input type="text"
          onChange={this.update.bind(this)} />
        <h1>{txt}</h1>
        <p>{this.state.txt}</p>
      </div>);
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  cat: 1
}

export default App;
