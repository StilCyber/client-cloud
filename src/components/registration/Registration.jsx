import React from "react";
import Input from "../../UI/input/Input";

function Registration() {
  return (
    <div className="registration">
        <div className="registration__header">Registration</div>
        <Input type='text' placeholder='Name'/>
        <Input type='text' placeholder='Name'/>
        <Input type='text' placeholder='Name'/>
        <Input type='text' placeholder='Name'/>
    </div>
  )
}

export default Registration;
