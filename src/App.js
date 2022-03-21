import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import store from './Store';
import { Provider } from 'react-redux'
import React, { Component } from 'react';
import Main from './components/cores/Main'
import Sidebar from './components/cores/Sidebar';
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col } from 'react-bootstrap';

class App extends Component {
  render() {

    const header = (
      <header className='App-header'>
        <h2 style={{ paddingLeft: '2rem' }}>Welcome to CUA HANG 7 TY</h2>
      </header>
    )

    const body = (
      <body className='App-body' >
        <div className='App-content'>
          <Row>
            <Col xs lg="2">
              <Sidebar />
            </Col>
            <Col>
                <Main/>
            </Col>
          </Row>
        </div>
      </body>
    )

    const footer = (
      <footer className='App-footer'>

      </footer>
    )

    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            {header}
            {body}
            {footer}
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;

/*

<div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <nav>
                <Link to={'/'} className="App-link">React CRUD Example</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <Link to={'/'} className="App-link">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link to={'/product'} className="App-link">Product</Link>
                    </li>
                    <li className="nav-item">
                      <Link to={'/index'} className="App-link">Index</Link>
                    </li>
                  </ul>
                </div>
              </nav> <br />
              <h2>Welcome to CUA HANG 7 TY</h2> <br />
              <Routes>
                <Route exact path='/product' element={<Product />} />
              </Routes>
            </header>
          </div>

*/