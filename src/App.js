import React, { Component }from 'react';

import './App.css';

class App extends Component {
  render() {
    return(
      <div>
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-2">
          <span className="navbar-brand col-sm-3 col-md-2 mr-0" >Sentimental Analysis</span>
          <input className="form-control form-control-dark w-70" type="text" placeholder="Search" aria-label="Search" />
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
              
            </li>
          </ul>
        </nav>
        <div style={{ backgroundColor: 'blue'}}>
          </div>        
    </div>

    );
  }
}
export default App;
