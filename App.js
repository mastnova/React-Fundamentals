import React from 'react';
class App extends React.Component {
  render() {
    let txt = this.props.txt;
    let cat = this.props.cat;
    return <div data-cat={cat}>{txt}</div>
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
