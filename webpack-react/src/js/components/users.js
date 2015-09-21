let React = require('react');
import './users.css';

let fetchUsers = (cb) => {
  setTimeout(() => {
    cb([
    {
      "id": 0,
      "name": "Ms. Jayson Oberbrunner"
    },
    {
      "id": 1,
      "name": "Wanda Osinski"
    },
    {
      "id": 2,
      "name": "Joey Windler"
    },
    {
      "id": 3,
      "name": "Ms. Vinnie Ernser"
    },
    {
      "id": 4,
      "name": "Helga Windler"
    },
    {
      "id": 5,
      "name": "Zula Lind"
    },
    {
      "id": 6,
      "name": "Sadye Fisher"
    },
    {
      "id": 7,
      "name": "Gregg Fisher MD"
    },
    {
      "id": 8,
      "name": "Fay Durgan"
    },
    {
      "id": 9,
      "name": "Remington Morissette"
    }
  ]);
  }, 500);
};

var Users= React.createClass({
  getInitialState () {
    return {
      users : {},
      loaded: false
    };
  },

  componentDidMount () {
    fetchUsers((users) => {
      this.setState({
        users,
        loaded: true
        });
    });
  },

  render () {
    if (!this.state.loaded) {
      return <div>Loading</div>;
    }

    let users = this.state.users.map((user) => {
      return <li className="Grid-cell u-size1of2 u-lg-size6of12 User" key={user.id}>{user.name}</li>;
    });

    return (
      <div>
          <h1>Author index</h1>
          <ul className="Grid Grid--alignLeft">{users}</ul>
      </div>
    );
  }

});

module.exports = Users;
