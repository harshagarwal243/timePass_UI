import React  from 'react'
import {Container , Row , Col ,Card ,CardImg , CardBody , CardText }from 'reactstrap'
import { Link } from 'react-router-dom'
import invest from '../assets/invest-1.jpg'
import buisness from '../assets/buisness-1.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './SignUp.css'


const SignUp = () => {
    return (
        <React.Fragment>
        <section className="First">
             <span className="Kredx"> Kred<span className="Last">X</span> </span>
        </section>
        <Container  fluid >
            <Row>

                <Col md={6} sm={12} className="offset-md-1">
                  
                    <section className="heading">
                         New To  <span style={{color:"#ff9900",fontWeight:"bolder"}}>KredX?</span> 
                     </section>
                     <div className="Card">
                             <div  className="Log-Button">
                                <Link to="/login" className="Link">
                                  <center>
                                      Login 
                                  </center>
                                  </Link>
                              </div>
                          
                             <div className="Sign-Button">
                                <Link to="/signup" className="Link">
                                  <center>
                                  Sign Up
                                  </center>
                                  </Link>
                              </div>
                                <section className="Signup-section">
                               <Container>
                                 <Row >
                                     <Col md={6} sm={12} > 
                                   
                                 <Card className="card-1">
                                 <Link className="Link" to="/register">
                                     <CardImg top src={invest} alt="card-image"  width="100%" height="180px"
                                         style={{borderRadius:"10px 10px 0px 0px"}} />
                                     <CardBody>
                                         <CardText style={{textAlign:"center"}}>
                                            Sign Up as an Investor
                                         </CardText>
                                     </CardBody>
                                     </Link>
                                 </Card>
                                
                                 </Col>
                                  <Col md={6} sm={12}>
                                      <center>
                                 <Card className="card-2">
                                 <Link className="Link" to="/contact">
                                     <CardImg top src={buisness} alt="card-image"  width="100%" height="180px"
                                       style={{borderRadius:"10px 10px 0px 0px"}} />
                                     <CardBody>
                                         <CardText>
                                             Sign Up as an Buisness
                                         </CardText>
                                     </CardBody>
                                </Link>
                                 </Card>
                                 </center>
                                 </Col>
                                 </Row> 
                                 </Container>
                                 </section>
                                 </div>
                </Col>
                <Col md={5} sm={12}>
                    <div style={{backgroundColor:"yellow"}}>

                    </div>
                </Col>
            </Row>
        </Container>
        </React.Fragment>
    );
}

export default SignUp;