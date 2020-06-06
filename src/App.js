import React from 'react'
import { BrowserRouter , Route } from 'react-router-dom'
import Login from './Login/Login'
import SignUp from './Signup/SignUp'
import register from './Register/Register'
import Check from './check/Check';

import './App.css'

const App = () => {
    return (
        
        <BrowserRouter>
         <Route path="/login"  exact component={Login}/>
         <Route path="/signup" exact component={SignUp} />
         <Route path="/register" exact component ={register} />
         <Route path="/check" exact component ={Check}/>
        </BrowserRouter>
        
    )
}


export default App;