import React, { useState } from "react"
import Input from "../../UI/input/Input"
import "./login.css"
import { login } from "../../actions/user"
import {useDispatch} from 'react-redux'


function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  return (
    <div className="registration">
      <div className="registration__header">
        <p>Login</p>
      </div>
      <Input
        type="text"
        placeholder="Email"
        className="registration__input"
        value={email}
        setValue={setEmail}
      />
      <Input
        type="password"
        placeholder="Password"
        className="registration__input"
        value={password}
        setValue={setPassword}
      />
      <div className="registration__button">
        <button onClick={() => dispatch(login(email, password))}>Entry</button>
      </div>
    </div>
  )
}

export default Login
