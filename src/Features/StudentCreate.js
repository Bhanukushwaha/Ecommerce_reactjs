import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { BASE_URL } from '../Component/config';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function StudentCreate() {
  const [firstname, setFirstname] = useState('');
  const [last_name, setLast_name] = useState('');
  const [roll_number, setRoll_number] = useState('');
  const [district, setDistrict] = useState('');
  const [branch, setBranch] = useState('');
  const [image, setImage] = useState(null); // Store file object
  const [active, setActive] = useState(false);
  const { user_data } = useSelector(state => state.auth);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file); // Save file to state
    } else {
      console.log('No file selected');
    }
  };
  // Async function to send form data including the image
  async function authenticate(event) {
    event.preventDefault(); // Prevent form reload

    // Create a FormData object
    const formData = new FormData();
    formData.append('firstname', firstname);
    formData.append('last_name', last_name);
    formData.append('roll_number', roll_number);
    formData.append('district', district);
    formData.append('branch', branch);
    formData.append('active', active);
    if (image) {
      formData.append('image', image); // Attach file
    }

    try {
      const response = await fetch(`${BASE_URL}/api/students`, {
        method: 'POST',
        headers: {
          'Token': user_data.authentication_token, // Include token here
        },
        body: formData, // Pass FormData as the body
      });

      const result = await response.json();
      if (result.data.success) {
        navigate('/Studentindex'); // Redirect to '/students' page on success
      } else {
        console.error('Error:', result.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error during form submission:', error.message);
    }
  }

  return (
    <Form className="container">
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Firstname</Form.Label>
          <Form.Control
            type="text"
            value={firstname}
            onChange={(text) => setFirstname(text.target.value)}
            placeholder="Enter Firstname"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            value={last_name}
            onChange={(text) => setLast_name(text.target.value)}
            placeholder="Enter Last Name"
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>District</Form.Label>
          <Form.Control
            value={district}
            onChange={(text) => setDistrict(text.target.value)}
            placeholder="Enter District"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Branch</Form.Label>
          <Form.Control
            value={branch}
            onChange={(text) => setBranch(text.target.value)}
            placeholder="Enter Branch"
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Roll Number</Form.Label>
          <Form.Control
            value={roll_number}
            onChange={(text) => setRoll_number(text.target.value)}
            placeholder="Enter Roll Number"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridImage">
          <Form.Label>Upload Image</Form.Label>
          <Form.Control
            type="file"
            onChange={(event) => handleFileChange(event)}
            accept="image/*"
          />
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check
          type="checkbox"
          checked={active}
          onChange={() => setActive(!active)}
          label="Check me out"
        />
      </Form.Group>
      <div>
        <Button onClick={authenticate} size="sm">Submit Form</Button>{' '}
        <Button onClick={() => navigate('/Studentindex')} size="sm">Back to Home</Button>
      </div>
    </Form>
  );
}
export default StudentCreate;
