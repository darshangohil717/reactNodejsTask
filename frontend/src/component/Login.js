import React, {useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FormControl, InputLabel, Input, Button, TextField } from "@mui/material";

import * as UserService from "../service/UserService";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useNavigate();

  const handleSubmit = async () => {
    console.log(email, password)
    let newObj = {}
    newObj.email = email;
    newObj.password = password;
   const data = await UserService.login(newObj);
   if(data.status === 200) {
    history("/userList")
   }
  }
  const hanldeNavigate = () => {
    history("/create")
  }

  return (
    <>
    <TextField label="email" name="email"  onChange={(e) => {setEmail(e.target.value)}}/>
    <br/>
    <TextField label="password" name="password" onChange={(e) => {setPassword(e.target.value)}} />
    <br/>
    <Button variant="contained" onClick={handleSubmit}>Submit</Button>
    <div>
    <Button variant="contained" onClick={hanldeNavigate}>Register</Button>
    </div>
    </>
  )
}

export default Login;