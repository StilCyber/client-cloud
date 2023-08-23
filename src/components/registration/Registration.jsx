import React, { useState } from "react"
import Input from "../../UI/input/Input"
import "./registration.css"
import { registration } from "../../actions/user"

function Registration() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div className="registration">
      <div className="registration__header">
        <p>Registration</p>
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
        <button onClick={() => registration(email, password)}>Entry</button>
      </div>
    </div>
  )
}

export default Registration
