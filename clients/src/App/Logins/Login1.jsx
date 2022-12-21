import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function Login1() {
    const navigate = useNavigate();
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
  
    // console.log("email",email);
   
    const [first, setfirst] = useState('')
    const [name, setName] = useState('')
    const Registration = () => {
        navigate('/registration');
    
      }
      const Login = () => {
        console.log('dg,fgflg,erl,');
        var config = {
          method: 'post',
          url: 'http://localhost:5050/api/login/signin',
    
          data: {
            "email": email,
            "password": password
          }
        };
    
        axios(config)
          .then(function (response) {
            console.log(response.data);
            localStorage.setItem('roleid', 1)
            // navigate('/userprofile');
          })
          .catch(function (error) {
            console.log(error);
          });
    
      }
    return (
        <><div className='loginbody'>
            <div className={first ? `${first} login_container` : "login_container"} id="login_container">
                <div className="form-login_container  sign-up-login_container">
                    <form action="">
                        <div className="header">Sign Up</div>
                        <div className="social__media__login_container">
                            <a href="https://codepen.io/Rittenhouse" target="_blank" className="social codepen">
                                <i className="fa-brands fa-codepen" />
                            </a>
                            <a href="#" className="social google">
                                <i className="fa-brands fa-google" />
                            </a>
                            <a href="https://www.instagram.com/zaur.suleymnv/" target="_blank" className="social agram">
                                <i className="fa-brands fa-instagram" />
                            </a>
                        </div>
                        <span className="under__social">
                            <a href="#" className="link signin-link">or use your email for registration
                            </a>
                        </span>
                        <div className="button-input-group">
                            <div className="group input-group">
                                <input type="text" placeholder="Name" required />
                            </div>
                            <div className="group input-group">
                                <input type="email" placeholder="Email" required />
                            </div>
                            <div className="group input-group">
                                <input type="password" placeholder="Password" required pattern=".{8,}" />
                            </div>
                            <div className="group input-group">
                                <input type="password" placeholder="Confirm Password" required pattern=".{8,}" />
                            </div>
                            <div className="alert-text signup__alert">
                                {/* <span className="help__text">At least 8 character</span> */}
                            </div>
                            <div className="group button-group">
                                <button className="signup-btn" >Sign Up</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="form-login_container  sign-in-login_container">
                    <form >
                        <div className="header" >Sign In</div>
                        <div className="social__media__login_container">
                            <a href="https://codepen.io/Rittenhouse" target="_blank" className="social codepen">
                                <i className="fa-brands fa-codepen" />
                            </a>
                            <a className="social google">
                                <i className="fa-brands fa-google" />
                            </a>
                            <a href="https://www.instagram.com/zaur.suleymnv/" target="_blank" className="social instagram">
                                <i className="fa-brands fa-instagram" />
                            </a>
                        </div>
                        <span className="under__social">
                            <a href="#" className="link signup-link">or use your account</a>
                        </span>
                        <div className="button-input-group">
                            <div className="group input-group">
                                <input type="email" placeholder="Email" onChange={(e) => { setemail(e.target.value) }} required />
                            </div>
                            <div className="group input-group">
                                <input type="password" placeholder="Password" onChange={(e) => { setpassword(e.target.value) }}  required pattern=".{8,}" />
                            </div>
                            <div className="alert-text signup__alert">
                                {/* <span className="help__text">At least 8 character</span> */}
                            </div>
                            <div className="form-link forgot">
                                <a href="#" className="login-link">Forgot your password?</a>
                            </div>
                            <div className="group button-group">
                                <button className="signin-btn" onClick={Login} >Sign in</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="overlay-login_container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>Please login your personal info</p>
                            <div className="group button-group">
                                <button className="ghost" id="signIn"  type="submit" onClick={Login} >Sign in</button>
                            </div>
                            {/* <footer>
                                <p>Inspired by <a href="https://codepen.io/Rittenhouse" target="_blank">Zaur Suleymanlı</a></p>
                            </footer> */}
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start your journey with us</p>
                            <div className="group button-group">
                                <button className="ghost" id="signUp" onClick={(e) => setfirst('right-panel-active')}  >Sign up</button>
                            </div>
                            {/* <footer>
                                <p>Inspired by <a href="https://codepen.io/Rittenhouse" target="_blank">Zaur Suleymanlı</a></p>
                            </footer> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>




        </>
    )

}

export default Login1