import React , { useState , useEffect } from 'react';
import { Link  } from 'react-router-dom'


const Check = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    console.log("ABOVE USEEFFECT : ")
    useEffect(() => {
        console.log('effect');
        console.log({
            name,
            username
        });

        return () => {
            console.log('cleaned up');
            console.log({
                name,
                username
            });
        };
    });
    console.log("BELOW USEEFFECT : ")
     
    const handleName = e => {
        const { value } = e.target;

        setName(value);
    };

    const handleUsername = e => {
        const { value } = e.target;

        setUsername(value);
    };

    return (
        <div style={{backgroundColor : "white",textAlign : "center"}}>
            <div>
                <Link to="/login">Login</Link>
                <input value={name} onChange={handleName} /> <br/>
                <input value={username} onChange={handleUsername} />
            </div>
            <div>
                <div>
                    <span> Name : {name}</span>
                </div>
                <div>
                    <span>UserName : {username}</span>
                </div>
            </div>
        </div>
    );
};


export default Check ;