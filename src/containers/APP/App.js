import React, { Component } from "react";
import axios from "axios";
import { Route, Switch, withRouter } from 'react-router-dom'
const serverURL = 'http://localhost:8080/api/v1';
class App extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    contact: "",
    branch: "",
    rollNo: "",
    organization: "",
    loading:false,
    msg:"",
    loginEmail:"",
    loginPassword:""

  }
  inputHandler = (e) => {

    this.setState({
      [e.target.name]: e.target.value
    })
  }
  signUpHandler = async (e) => {
    e.preventDefault();
    this.setState({
      loading:true,
      msg:""
    })
    let res = await axios.post(`${serverURL}/signup`, {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      contact: this.state.contact,
      branch: this.state.branch,
      rollNo: this.state.rollNo,
      organization: this.state.organization
    })
    this.setState({
      loading:false,
      msg:res.data.status===400||res.data.status===undefined?res.data.error:"Registered!"
    })

  }
  loginHandler=async(e)=>{
    e.preventDefault();
    this.setState({
      loading:true
    })
    let res  = await axios.post(`${serverURL}/login`,{
      email:this.state.loginEmail,
      password:this.state.loginPassword
    })
    console.log(res.data);
    localStorage.setItem('token',res.data.data.token)
    this.setState({
      loading:false
    })
    this.props.history.push('/home')
  }
  render() {
    return (

      <div>
        Home
        <link rel="stylesheet" type="text/css" href="letsgocss.css" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css?family=IBM+Plex+Serif"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Playfair+Display"
          rel="stylesheet"
        />
        <title>IIITU Alumni Website</title>
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          <div className="header-top">
            <div className="logo">
              <img src="iiitulogo.png" />
            </div>
            <div className="info">
              <h2>IIIT UNA</h2>
              <h3>Alumni Interaction Portal</h3>
            </div>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav nav-contents ml-auto navbarLinks">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown drop">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Departments
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="dropdown-submenu dropleft ">
                    <a className="dropdown-item test dropdown-toggle" href="#">
                      Computer Science
                      <span className="caret" />
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          2014
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          2015
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu dropleft">
                    <a className="dropdown-item test dropdown-toggle" href="#">
                      Electronics and Communication
                      <span className="caret" />
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          2014
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          2015
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu dropleft">
                    <a className="dropdown-item test dropdown-toggle" href="#">
                      Information Technology
                      <span className="caret" />
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          2014
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          2015
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="form-inline login-form">
              <input
                className="form-control mr-sm-2"
                type="username"
                name="loginEmail"
                value={this.state.loginEmail}
                onChange={this.inputHandler}
                placeholder="Username"
                aria-label="username"
              />
              <input
                type="password"
                className="form-control mr-sm-2"
                onChange={this.inputHandler}
                value={this.state.loginPassword}
                placeholder="Password"
                name="loginPassword"
                id="pwd"
              />
              <button
                className="btn btn-outline-dark my-2 my-sm-0"
                type="submit"
                onClick={this.loginHandler}
                disabled={this.state.loading}
              >
                Login
              </button>
            </form>
          </div>
        </nav>
        <div className="box">
          <div className="container slider">
            <div className="row">
              <div className="col-lg-8 ">
                <div
                  id="carouselExampleFade"
                  className="carousel slide carousel-fade"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="image.jpg"
                        className="d-block w-100"
                        alt="..."
                        width={530}
                        height={530}
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="image-2.jpg"
                        className="d-block w-100"
                        alt="..."
                        width={530}
                        height={530}
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="image-3.jpg"
                        className="d-block w-100"
                        alt="..."
                        width={530}
                        height={530}
                      />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleFade"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleFade"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 sign-up">
                <h2>Sign Up</h2>
                <form>
                  {this.state.msg}
                  <div className="form-group row">
                    <div className="col-sm-10">
                      <input
                        value={this.state.firstName}
                        onChange={this.inputHandler}
                        type="Name"
                        className="form-control"
                        id="inputPassword"
                        placeholder="First Name"
                        name="firstName"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-10">
                      <input
                        value={this.state.lastName}
                        onChange={this.inputHandler}
                        type="Name"
                        className="form-control"
                        id="inputPassword"
                        placeholder="Last Name"
                        name="lastName"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-10">
                      <input
                        value={this.state.email}
                        onChange={this.inputHandler}
                        type="Email"
                        className="form-control"
                        id="inputPassword"
                        placeholder="Email"
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-10">
                      <input
                        value={this.state.password}
                        onChange={this.inputHandler}
                        type="password"
                        className="form-control"
                        id="inputPassword"
                        placeholder="Password"
                        name="password"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-10">
                      <input
                        value={this.state.contact}
                        onChange={this.inputHandler}
                        type="text"
                        className="form-control"
                        id="inputPassword"
                        placeholder="Contact Number"
                        name="contact"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-10">
                      <select id="inputState" value={this.state.branch}
                        onChange={this.inputHandler} name="branch" className="form-control">
                        <option selected value="" >Select Branch</option>
                        <option value="Computer Science" >Computer Science</option>
                        <option value="Electronics and Comunication">Electronics and Comunication</option>
                        <option value="Information technology">Information technology</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-10">
                      <input
                        type="text"
                        value={this.state.rollNo}
                        onChange={this.inputHandler}
                        className="form-control"
                        id="inputPassword"
                        placeholder="IIITU15101"
                        name="rollNo"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-10">
                      <input
                        type="Organisation"
                        value={this.state.organization}
                        onChange={this.inputHandler}
                        className="form-control"
                        id="inputPassword"
                        placeholder="Google@llc"
                        name="organization"
                      />
                    </div>
                  </div>
                  <button
                    onClick={this.signUpHandler}
                    type="button"
                    className="btn btn-outline-dark"
                    id="signup-button"
                    disabled={this.state.loading}
                  >
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
