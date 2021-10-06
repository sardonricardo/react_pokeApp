import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return <nav>
      <ul className="nav--list">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/new">Add Pokemon</Link></li>
    <li><Link to="/pokemon/:id">Details</Link></li>
</ul>
</nav>;
  }
}

export default Nav;
