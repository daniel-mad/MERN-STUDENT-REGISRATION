import axios from 'axios';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FileDownload from 'js-file-download';

const Header = () => {
  const downloadCsv = async () => {
    const config = {
      responseType: 'blob',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await axios.get('/api/reports', config);
    FileDownload(response.data, 'report.csv');
  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/">ORT Students</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="דוחות" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={downloadCsv}>
                יצא דו״ח
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
