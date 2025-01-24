import React, { useEffect, useState, useCallback } from 'react';
import { BASE_URL } from '../Component/config';
import { useSelector } from 'react-redux';
import axios from 'axios';
import './student.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Studentindex = () => {
  const { user_data } = useSelector((state) => state.auth);
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // State for search input
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const fetchStudentData = useCallback(async () => {
    const headers = {
      'Content-Type': 'application/json',
      'Token': user_data?.authentication_token,
    };
    try {
      const res = await axios.get(`${BASE_URL}/api/students`, { headers });
      setStudents(res.data.data);
    } catch (error) {
      setError(error.message);
    }
  }, [user_data]);

  useEffect(() => {
    if (user_data?.authentication_token) {
      fetchStudentData();
    }
  }, [user_data, fetchStudentData]);

  const handleDelete = async (studentId) => {
    const headers = {
      'Content-Type': 'application/json',
      'Token': user_data?.authentication_token,
    };
    try {
      await axios.delete(`${BASE_URL}/api/students/${studentId}`, { headers });
      fetchStudentData();
    } catch (error) {
      setError(error.message);
    }
  };

  // Filter students by search query
  const filteredStudents = students.filter((student) =>
    student.firstname.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (    
    <div>
      <Navbar bg="primary" >
        <Container fluid>
          <Navbar.Brand href="#" style={{ color: 'white' }} >Students</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll>
              <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search by First Name student...."
                className="me-2"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}/>
              </Form>
            </Nav>
            <Button variant="success" onClick={() => navigate('/studentCreate')}>New student</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>      
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}     
      <table id="myTable">
        <thead>
          <tr className="header">
            <th>Id</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Roll No</th>
            <th>Branch</th>
            <th>Image</th>
            <th>Active</th>
            <th colSpan="3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.length ? (
            filteredStudents.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.firstname}</td>
                <td>{student.last_name}</td>
                <td>{student.roll_number}</td>
                <td>{student.branch}</td>
                <td>
                  {student.image ? (
                    <img
                      src={student.image}
                      alt={`${student.firstname} ${student.last_name}`}
                      style={{width: '100px', height: '100px', objectFit: 'cover',}}
                    />
                  ) : (
                    'No Image'
                  )}
                </td>
                <td>{student.active ? 'true' : 'false'}</td>
                <td>
                  <Button onClick={() => handleDelete(student.id)}>Delete</Button>
                </td>
                <td>
                  <Button onClick={() => navigate(`/editstudent/${student.id}`)}>
                    Edit
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">No students found or data is loading...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default Studentindex;
