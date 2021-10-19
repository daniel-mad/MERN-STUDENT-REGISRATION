import './MainScreen.css';
import React from 'react';
import { Container } from 'react-bootstrap';

const MainScreen = ({ title = '', children }) => {
  return (
    <div className="main">
      <Container>
        <div>
          <h1 className="heading">{title}</h1>
          {children}
        </div>
      </Container>
    </div>
  );
};

export default MainScreen;
