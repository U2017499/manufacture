import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, NavDropdown} from "react-bootstrap";
import {Link} from 'react-router-dom'
import BasicTable from './BasicTable'
import BarChart from './BarChart'
import App2 from './barchart2'
import Chart3 from './Round'
import logo1 from '../logo1.jpeg'

class mp extends Component {
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
                <NavDropdown title="Sales Record" id="nav-dropdown" >
                    <NavDropdown.Item eventKey="Basic pricing" href="/salesrecord">Sales Record Daily </NavDropdown.Item>
                    <NavDropdown.Item eventKey="Corporate Pricing">Sales Record Weekly</NavDropdown.Item>
                    <NavDropdown.Item eventKey="Corporate Pricing">Sales Record Monthly</NavDropdown.Item>
                </NavDropdown>
                </li>
                <li className="nav-item">
                <NavDropdown title="Manufacture Product" id="nav-dropdown">
                    <NavDropdown.Item eventKey="Basic pricing" href = "/manufactureproduct">Manufacture Record Daily</NavDropdown.Item>
                    <NavDropdown.Item eventKey="Corporate Pricing">Manufacture Record Weekly</NavDropdown.Item>
                    <NavDropdown.Item eventKey="Corporate Pricing">Manufacture Record Weekly</NavDropdown.Item>
                </NavDropdown>
                </li>
            </ul>
          </div>
        </div>
      </Nav>

          <div className = "table">
         <BasicTable />
          </div>
          <div className = "charts">
                <BarChart />
                <br />
                <br />
                <Chart3 />
                <br />
                <br />
                <App2 />
      <br />
      <br />
      </div>
          </div>
    )
}
}

export default mp
