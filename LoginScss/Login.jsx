import React, {useState} from "react";
import loginImg from "./login.svg";
import "./stylez.scss";
import {Link} from 'react-router-dom'
import axios from 'axios'

function Login(props){
  const [user, setUser] = useState({
    email:'', password: ''
})

const onChangeInput = e =>{
    const {name, value} = e.target;
    setUser({...user, [name]:value})
}

const loginSubmit = async e =>{
    e.preventDefault()
    try {
        await axios.post('/user/login', {...user})

        localStorage.setItem('firstLogin', true)
        
        window.location.href = "/";
    } catch (err) {
        alert(err.response.data.msg)
    }
}
    return (
      <div className="base-container" ref={props.containerRef}>
         <form onSubmit={loginSubmit}>
        <div className="header">Login</div>
          <div className="content">
           <div className="image">
             <img src={loginImg} />
           </div>
            <div className="form">
              
           
              <div className="form-group">
                <label htmlFor="username">E-mail</label>
                <input type="email" name="email" required
                placeholder="Email" value={user.email} onChange={onChangeInput} />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" required autoComplete="on"
                placeholder="Password" value={user.password} onChange={onChangeInput} />

                 </div>
              
             </div>
          </div>
        
        <div className="footer">
          <button type="button" className="btn" onClick = {loginSubmit}>
            Login
          </button>
          
        </div>
        </form>
      </div>
    );
  }


export default Login;