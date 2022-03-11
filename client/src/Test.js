import { Link } from "react-router-dom";

import logo from './logo.svg';
import './Test.css';

function Test() {
  return (
    <div className="Test">
      <header className="Test-header">
        <img src={logo} className="Test-logo" alt="logo" />
        <p>
          Edit <code>src/Test.js</code> and save to reload.
        </p>
        <Link className="Test-link" to="/">Goto root</Link>
      </header>
    </div>
  );
}

export default Test;