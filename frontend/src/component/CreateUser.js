import React, {useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FormControl, InputLabel, Input, Button, TextField } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

import * as UserService from "../service/UserService";
const CreateUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [checked, setChecked] = useState(false);
  let history = useNavigate();

  const handleSubmit = async () => {
    let newObj = {};
    newObj.email = email;
    newObj.password = password;
    newObj.firstName = firstName;
    newObj.lastName = lastName;
    newObj.dob = dob;
    newObj.city = city;
    newObj.state = state;
    newObj.isAdmin = checked;
    const result = await UserService.create(newObj);
    if(result.status === 200) {
        history('/userList')
    }
    // console.log(email, password, firstName, lastName, dob, city,state,checked)
  }

  const handleCheckBox = (e) => {
    setChecked(e.target.checked);
    console.log(e.target.checked);
  }

  return (
    <>
    <TextField label="email" name="email"  onChange={(e) => {setEmail(e.target.value)}}/>
    <br/>
    <TextField label="password" name="password" onChange={(e) => {setPassword(e.target.value)}} />
    <br/>
    <TextField label="firstName" name="firstName" onChange={(e) => {setFirstName(e.target.value)}} />
    <br/>
    <TextField label="lastName" name="lastName" onChange={(e) => {setLastName(e.target.value)}} />
    <br/>
    <TextField label="dob" name="dob" type="date" onChange={(e) => {setDob(e.target.value)}} />
    <br/>
    <TextField label="city" name="city" onChange={(e) => {setCity(e.target.value)}} />
    <br/>
    <TextField label="state" name="state" onChange={(e) => {setState(e.target.value)}} />
    <br/>
    <Checkbox
        checked={checked}
        onChange={handleCheckBox}
        inputProps={{ 'aria-label': 'controlled' }}
    />
    <Button variant="contained" onClick={handleSubmit}>Submit</Button>
    </>
  )
}

export default CreateUser;