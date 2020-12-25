import React, {useState} from "react";
import loginImg from "./login.svg";
import "./stylez.scss";
import {Link} from 'react-router-dom'
import axios from 'axios'

function Register(props){
  const [user, setUser] = useState({
    name:'', email:'', password: ''
})

const onChangeInput = e =>{
    const {name, value} = e.target;
    setUser({...user, [name]:value})
}

const registerSubmit = async e =>{
    e.preventDefault()
    try {
        await axios.post('/user/register', {...user})

        localStorage.setItem('firstLogin', true)

        
        window.location.href = "/";
    } catch (err) {
        alert(err.response.data.msg)
    }
}
    return (
      <div className="base-container" ref={props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="name" required
                placeholder="Name" value={user.name} onChange={onChangeInput} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
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
          <button type="button" className="btn" onClick={registerSubmit}>
            Register
          </button>
        </div>
      </div>
    );
  }


export default Register;