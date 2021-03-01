import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, NavDropdown} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo1 from '../logo1.jpeg'
import '../App.css'
class ProEntry extends Component {
  constructor(props) {
    super(props);
    this.state =({
        key: "home"
    })
    this.handleSelect = this.handleSelect.bind(this)

}

handleSelect(key){
    this.setState({
        key: key
    })
    alert(`selected ${key}`)
}
render() {

        return (
          <div className = "container-fluid">
       <Nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
        <img className="navbar-brand" src={logo1} style={{width:100, marginTop: -7}} alt = "logo"/>
          {/* <Link className="navbar-brand" to={"/login"}>Swiftsense.io</Link> */}
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/productentry"}>Product Entry</Link>
              </li>
                <li className="nav-item">
                <NavDropdown title="Sales Record" id="nav-dropdown" to = "/salesrecord">
                    <NavDropdown.Item eventKey="Basic pricing" href="/salesrecord">Sales Record Daily</NavDropdown.Item>
                    <NavDropdown.Item eventKey="Corporate Pricing">Sales Record Weekly</NavDropdown.Item>
                    <NavDropdown.Item eventKey="Corporate Pricing" >Sales Record Monthly</NavDropdown.Item>
                </NavDropdown>
                </li>
                <li className="nav-item">
                <NavDropdown title="Manufacture Product" id="nav-dropdown">
                    <NavDropdown.Item eventKey="Basic pricing" href = "/manufactureproduct">Manufacture Record Daily</NavDropdown.Item>
                    <NavDropdown.Item eventKey="Corporate Pricing">Manufacture Record Weekly</NavDropdown.Item>
                    <NavDropdown.Item eventKey="Corporate Pricing">Manufacture Record Monthly</NavDropdown.Item>
                </NavDropdown>
                </li>
            </ul>
          </div>
        </div>
      </Nav>

      <div className="auth-wrapper2">
        <div className="auth-inner2">
            <form>
                <h3>Product Entity</h3>
                <div className="form-group">
                    <label>Product ID</label>
                    <input type="text" className="form-control" placeholder="Product ID" />
                </div>

                <div className="form-group">
                    <label>Store ID</label>
                    <input type="text" className="form-control" placeholder="Store ID" />
                </div>

                <div className="form-group">
                    <label>Product Quantity</label>
                    <input type="email" className="form-control" placeholder="Product Quantity" />
                </div>

                <div className="form-group">
                    <label>Manufacture Date</label>
                    <input type="password" className="form-control" placeholder="Manufacture Date" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Save</button>
            </form>
            </div>
            </div>
            </div>
        );
    }
  }
export default ProEntry;