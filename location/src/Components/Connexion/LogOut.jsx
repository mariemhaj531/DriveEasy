import React from "react";
import "./Logout.css";
import user from "../../assets/user.png";
import email from "../../assets/email.jpg";
import pass from "../../assets/pass.png";
//import telephone from "../../assets/telephone.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import google from "../../assets/google.png";
import { useState } from "react";
import axios from "axios";
//import axios from 'axios';
import swal from "sweetalert";
import { useNavigate } from 'react-router-dom';
function LogOut() {
  const navigate = useNavigate();

 const [logoutinput, setLogOut] = useState({
  name: '',
  email: '',
  password: '',
  error_list: [],
 });
  const handleInput = (e) => {
    e.persist();
    setLogOut({...logoutinput, [e.target.name]: e.target.value });
  }
  const logoutSubmit = (e) => {
    e.preventDefault();
    
    const data = {
      name: logoutinput.name,
      email: logoutinput.email,
      password: logoutinput.password,
    }//`/api/logout`
    axios.get('/sanctum/csrf-cookie').then( response => {

    axios.post(`/api/register`, data).then(res => {
      if(res.data.status === 200)
      {
          localStorage.setItem('auth_token', res.data.token);
          localStorage.setItem('auth_name', res.data.username);
           swal("Success", res.data.message, "success");
           navigate('/');
          }
      else
      {
        setLogOut({...logoutinput,error_list: res.data.validation_errors });
      }
      
    });
  });
  }
//http://127.0.0.1:8000/api/register
//onClick="signInWithFacebook()"
//onClick="signInWithGoogle()"
//onClick="signInWithTwitter()
  return (
    <div className="main">
      <div className="mini-main">
        <div>
          <div className="part">
            <h1>Inscrire Ici</h1>
            <form onSubmit={logoutSubmit}>
            <div>
             <label htmlFor="NomComplet"> Name </label>
              <img src={user} alt="text" className="input-icon" />
              <input type="text"  name="name" onChange={handleInput}     value={logoutinput.name} className="name"/>
              <span>{logoutinput.error_list.name}</span>
            </div>
            <div>
              <label htmlFor="Email">Email</label>
              <img src={email} alt="email" className="input-icon" />
              <input type="text" name="email"  onChange={handleInput}   value={logoutinput.email}  className="name"  />
              <span>{logoutinput.error_list.email}</span>
            </div>
            <div >
              <label htmlFor="Password">Password</label>
              <img src={pass} alt="pass" className="input-icon" />
              <input
                type="password"
                className="name"
                onChange={handleInput}   value={logoutinput.password} name="password"
              />
             <span>{logoutinput.error_list.password}</span>
            </div>
            <div className="btn">
              <button  className=" ghost" id="signUp" >Register</button>
            </div>
            </form>
            <p className="link">
              {" "}
              Vous avez un compte ?<a href="/LogIn">Login</a>
            </p>             
              <div className="Social">
              <div>
                <a href="/"   >
                  <img src={facebook} alt="facebook" className="social-icon" />
                </a>
              </div>
                <div>
                <a href="/"  >
                <img src={google} alt="google" className="social-icon" />
                </a>
              </div>
              <div>
                <a href="/"   >
                  <img src={twitter} alt="twitter" className="social-icon" />
                </a>
              </div>       
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default LogOut;
