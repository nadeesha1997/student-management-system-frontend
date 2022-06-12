import React, { useState,useEffect } from 'react';
import { Link ,useHistory} from "react-router-dom";
import axios from 'axios';
import {
  ListGroup,
  ListGroupItem,
  Button
} from "reactstrap";

export const StudentList = () => {
  let history=useHistory()
  const [students, setStudents] = useState([]);
  const getStudents=()=>{
    axios.get("http://localhost:8080/api").then(r=>setStudents(r.data))
    console.log(students)}
  useEffect(() => {
    getStudents();
    getStudents();
  },[])
  const removeStudent=(id)=>{
    axios.delete("http://localhost:8080/api/"+id).then(r=>{
      console.log(r.data);
      getStudents();
      
    })
    history.push("/");
  }
  return (
    <>
    <ListGroup className="mt-4">
      {students.length > 0 ? (
        <>
          {students.map(student => (
            <ListGroupItem className="d-flex" key={student.id}>
              <strong>{student.firstName} {student.lastName}</strong>
              <div className="ml-auto">
                <Link to={`/edit/${student.id}`} color="warning" className="btn btn-warning mr-1" >Edit</Link>
                <Link to={`/show/${student.id}`} color="primary" className="btn btn-primary mr-1">Show</Link>
                <Button onClick={() => removeStudent(student.id)} color="danger">Delete</Button>
              </div>
            </ListGroupItem>
          ))}
        </>
      ) : (
          <h4 className="text-center">No Students</h4>
        )}
    </ListGroup>
    </>
  )
}
