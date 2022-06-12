import React, { useState,useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

export const EditStudent = (props) => {
  const history = useHistory();
  const id = props.match.params.id;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState(0);
  const [grade, setGrade] = useState(0);
  useEffect(() => {
    axios.get("http://localhost:8080/api/"+id).then(r=>{
      setFirstName(r.data.firstName);
      setLastName(r.data.lastName)
    })
  },[])

  const onSubmit = (e) => {
    e.preventDefault();
    let postvalue={"firstName":firstName,"lastName":lastName};
        console.log(postvalue);
        axios.put("http://localhost:8080/api",postvalue)
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
      <Button type="submit">Edit Name</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  )
}
