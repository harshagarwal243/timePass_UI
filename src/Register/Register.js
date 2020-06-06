import React , { useState}  from 'react'
import {Container ,Row ,Col , Input, Form ,FormGroup,Label} from 'reactstrap'
import { Link } from 'react-router-dom'
import InputText from '../InputBox/Input'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


const Register = () => {
     const [phone , setPhone] = useState("");
     console.log(phone)
   return(
    <React.Fragment>
    <section className="First">
         <span className="Kredx"> Kred<span className="Last">X</span> </span>
    </section>
       <Container fluid  >
           <Row>
               <Col md={8} sm={12} className="offset-md-2">
                    <section className="heading">
                         Sign Up To Become A <span style={{color:"#ff9900",fontWeight:"bolder"}}>KredX Investor</span>
                     </section>
                   <div className = "Register">
                        <Form style={{width:"92%",margin:"0px auto"}}>
                        <InputText label="Full Name*" type="text" />
                         
                        <InputText label="Email Address*" type="email"/>
                        <InputText label="Password*" type="email"/>
                        <InputText label="Referal Code(if any)" type="email"/>
                        <PhoneInput country={'in'}  value={phone}  onChange={phone => setPhone( phone )} 
                          inputClass="Phone"
                          inputStyle={{width:"100%",fontSize:"20px",border:"none",borderBottom : "1px grey solid"}} 
                          containerStyle={{marginTop : "50px"}} />
                        <FormGroup check style={{marginTop:"25px",marginBottom:"30px"}}>
                          <Input type="checkbox" name="check" id="exampleCheck" />
                          <Label for="exampleCheck" check style={{fontSize:"18px"}}>I have read and accept the 
                             <span style={{color:"#ff9900",fontWeight:"bold"}}>&nbsp;Terms &amp; Conditions</span> and 
                            <span style={{color:"#ff9900",fontWeight:"bold"}}>&nbsp;KredX's Privacy Policy</span></Label>
                        </FormGroup>
                        <button  className="signin-button">Submit</button><br/><br/>
                        <span style={{color:"#ff9900"}}>Already on KredX ? <Link className="Link" to="login">
                              Login Now</Link></span>
                        </Form>
                       
                   </div>
               </Col>
           </Row>

       </Container>
       </React.Fragment>
   ); 

}

export default Register;