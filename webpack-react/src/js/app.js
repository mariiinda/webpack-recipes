require('./app.css');

let React = require('react'),
    Users = require('./components/users');

let App = React.createClass({
  getInitialState () {
    return {};
  },

  componentDidMount () {
  },

  render () {
    return (
      <div className="App">
         <Users />
      </div>
    );
  }
});

React.render(<App />, document.body);
