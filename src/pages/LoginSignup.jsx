import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import './css/LoginSignup.css';

const LoginSignup = () => {
  const { t } = useTranslation();

  const [state, setState] = useState("Login");
  const [formData, serFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const changeHandler = (e) => {
    serFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const login = async () => {
    console.log('login done', formData);
    let responseData;
    await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    }).then((response) => response.json())
      .then((data) => responseData = data)
    if (responseData.success) {
      localStorage.setItem('authToken', responseData.token);
      window.location.href = "/";
    } else {
      alert(responseData.errors)
    }
  }

  const signup = async () => {
    console.log('signup done', formData);
    let responseData;
    await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    }).then((response) => response.json())
      .then((data) => responseData = data)
    if (responseData.success) {
      localStorage.setItem('authToken', responseData.token);
      window.location.href = "/";
    } else {
      alert(responseData.errors)
    }
  }

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{t(`login.${state}`)}</h1>

        <div className="loginsignup-fields">
          {state === "signup" ? <input name="name" value={formData.name} onChange={changeHandler} type="text" placeholder={t('login.Your Name')} /> : <></>}
          <input name="email" value={formData.email} onChange={changeHandler} type="email" placeholder={t('login.Your Email')} />
          <input name="password" value={formData.password} onChange={changeHandler} type="password" placeholder={t('login.Your Password')} />
        </div>
        <button onClick={() => (state === "signup" ? signup() : login())}>{t('login.Continue')}</button>
        {state === "signup" ? 
          <p className="loginsignup-login">{t('login.Already have an account?')} <span onClick={() => setState("Login")}>{t('login.Login Here!')}</span></p> : 
          <p className="loginsignup-login">{t('login.Create an account?')} <span onClick={() => setState("signup")}>{t('login.Sign Up Here!')}</span></p>
        }

        <div className="login-signup-agree">
          <input type="checkbox" name="" id="" />
          <p>{t('login.By continuing, I agree to the Terms of Use and Privacy Policy')}</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup;
