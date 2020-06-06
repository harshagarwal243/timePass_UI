import React , { useState }from 'react'
import { Input , Label } from 'reactstrap'



const InputText = (props) => {
    const label = props.label
    const [focus , setFocus ] = useState(false);
    const style = {
        top : focus ? "0px" : "44px",
        fontSize : focus ? "inherit" : "20px",
        marginTop : "15px" 
    }
    return (
        <React.Fragment>
        <Label className="Label" style={style}> {label}</Label>
        <Input  className="Input"  onFocus={()=> {setFocus(true)}} 
                 onBlur={()=>{setFocus(false)}}  {...props}/>
        </React.Fragment>
    );
}

export default InputText;