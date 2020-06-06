import React  from 'react'
import {Container , Row , Col }from 'reactstrap'
import { Link } from 'react-router-dom'
import  FloatingInput  from '../InputBox/Input'



const Login = () => {
    return (
        <React.Fragment>
            <section className="First">
                 <span className="Kredx"> Kred<span className="Last">X</span> </span>
            </section>
        <Container fluid  >
            <Row>
                <Col md={6} sm={12} className="offset-md-1">
                     <section className="heading">
                         Login To Your <span style={{color:"#ff9900",fontWeight:"bolder"}}>KredX</span> Account
                     </section>
                     <div className="Card">
                             <div  className="Log-Butt">
                                <Link to="/login" className="Link">
                                  <center>
                                      Login 
                                  </center>
                                  </Link>
                              </div>
                          
                             <div className="Sign-Butt">
                                <Link to="/signup" className="Link">
                                  <center>
                                  Sign Up
                                  </center>
                                  </Link>
                              </div>
                              <div className="LoginForm">
                                  <FloatingInput  label="username/ email" type="text" />
                                  <FloatingInput  label="password" type="password" />
                                  <p style={{textAlign:"right",color:"#ff9900",marginTop:"20px"}}>Forgot Password ?</p>
                                  <button  className="signin-button">Sign In</button>
                              </div>
                     </div>
                </Col>
                <Col md={4} sm={12}>
                    <div style={{backgroundColor:"yellow"}}>

                    </div>
                </Col>
            </Row>
        </Container>
        </React.Fragment>
    );
}

export default Login;