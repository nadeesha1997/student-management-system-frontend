import React, { useState,useEffect } from 'react';
import {  useHistory } from "react-router-dom";
import axios from 'axios';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter
} from "reactstrap";

export const Show = (props) => {
  const history = useHistory();
  const id = props.match.params.id;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState(0);
  const [grade, setGrade] = useState(0)
  useEffect(() => {
    axios.get("http://localhost:8080/api/"+id).then(r=>{
      setFirstName(r.data.firstName);
      setLastName(r.data.lastName)
      setAge(r.data.age);
      setGrade(r.data.grade);
    })
  },[])

  return (
    <Card>
        <CardHeader>
            {firstName} {lastName}
        </CardHeader>
        <CardBody>
            <ul>
                <li>Full Name: {firstName} {lastName}</li>
                <li>Age: {age}</li>
                <li>Grade: {grade}</li>
            </ul>
        </CardBody>
        <CardFooter>
            <Button className="btn btn-primary" onClick={()=>history.push("/")}>OK</Button>
        </CardFooter>
    </Card>
  )
}
