import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

export const AddStudent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [grade, setGrade] = useState(0);
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    let postvalue={"firstName":firstName,"lastName":lastName};
        console.log(postvalue);
        axios.post("http://localhost:8080/api",postvalue)
        .then(r=>console.log(r.data));
    history.push("/");
  }


  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>First Name</Label>
        <Input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)} name="firstName" placeholder="First Name" required></Input>
      </FormGroup>
      <FormGroup>
        <Label>Last Name</Label>
        <Input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} name="lastName" placeholder="Last Name" required></Input>
      </FormGroup>
      <FormGroup>
        <Label>Age</Label>
        <Input type="number" value={age} onChange={(e)=>setAge(e.target.value)} name="age" placeholder="age" required></Input>
      </FormGroup>
      <FormGroup>
        <Label>Grade</Label>
        <Input type="number" value={grade} onChange={(e)=>setGrade(e.target.value)} name="grade" placeholder="grade" required></Input>
      </FormGroup>
      
      <Button type="submit">Submit</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  )
}
