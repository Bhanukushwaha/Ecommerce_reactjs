import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { BASE_URL } from '../Component/config';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

function Editstudent() {
  const { id } = useParams();
  const fields = [
    { key: 'firstname', label: 'Firstname', type: 'text', placeholder: 'Enter Firstname' },
    { key: 'last_name', label: 'Last Name', type: 'text', placeholder: 'Enter Last Name' },
    { key: 'roll_number', label: 'Roll Number', type: 'text', placeholder: 'Enter Roll Number' },
    { key: 'district', label: 'District', type: 'text', placeholder: 'Enter District' },
    { key: 'branch', label: 'Branch', type: 'text', placeholder: 'Enter Branch' },
    { key: 'image', label: 'Image', type: 'file' },
  ];

  const [formData, setFormData] = useState({
    firstname: '',
    last_name: '',
    roll_number: '',
    district: '',
    branch: '',
    active: false,
  });

  const { user_data } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload

    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }

      const response = await axios.put(`${BASE_URL}/api/students/${id}`, formDataToSend, {
        headers: {
          'Token': user_data.authentication_token,
        },
      });
      if (response.status === "200") {
        navigate('/Studentindex');
      }
    } catch (error) {
      console.error('Error during student data submission:', error.message);
    }
  };

  // Handle input changes dynamically
  const handleChange = (key, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: value,
    }));
  };

  // Handle file input change
  const handleFileChange = (key, file) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: file,
    }));
  };

  // Toggle checkbox
  const toggleActive = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      active: !prevFormData.active,
    }));
  };

  useEffect(() => {
    // Fetch profile data and populate form fields
    const fetchStudentData = async () => {
      try {
        const headers = {
          'Content-Type': 'application/json',
          'Token': user_data.authentication_token,
        };

        const response = await axios.get(`${BASE_URL}/api/students/${id}`, { headers });
        const profileData = response.data.data;

        setFormData({
          firstname: profileData.firstname,
          last_name: profileData.last_name,
          roll_number: profileData.roll_number,
          district: profileData.district,
          branch: profileData.branch,
          image: null, // File object should be null initially
          active: profileData.active,
        });
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    if (user_data.authentication_token) {
      fetchStudentData();
    }
  }, [id, user_data.authentication_token]);

  return (
    <Form className="container" onSubmit={handleSubmit}>
      <Row className="mb-3">
        {fields.map((field, index) => (
          <Form.Group as={Col} controlId={`formGrid${field.key}`} key={index}>
            <Form.Label>{field.label}</Form.Label>
            {field.type === 'file' ? (
              <Form.Control
                type={field.type}
                onChange={(e) => handleFileChange(field.key, e.target.files[0])}
              />
            ) : (
              <Form.Control
                type={field.type}
                value={formData[field.key]}
                onChange={(e) => handleChange(field.key, e.target.value)}
                placeholder={field.placeholder}
              />
            )}
          </Form.Group>
        ))}
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check
          type="checkbox"
          checked={formData.active}
          onChange={toggleActive}
          label="Active"
        />
      </Form.Group>
      <Button variant="primary" type="submit">Submit</Button>
      <Button variant="secondary" onClick={() => navigate("/Studentindex")} className="ms-2">
        Back to home
      </Button>
    </Form>
  );
}

export default Editstudent;
