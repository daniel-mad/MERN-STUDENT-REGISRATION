import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import MainScreen from '../components/MainScreen';

const RegisterPage = ({ collage_name = 'אורט סינגלובסקי' }) => {
  const [validated, setValidated] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [idNum, setIdNum] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('m');
  const [homephone, setHomephone] = useState('');
  const [mobilephone, setMobilephone] = useState('');
  const [email, setEmail] = useState('');
  const [aliyahDate, setAliyahDate] = useState('');
  const [originCountry, setOriginCountry] = useState('ISR');
  const [nation, setNation] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <MainScreen title="טופס רישום תלמיד לשנה״ל תשפ״ג 2022">
      <header>
        <h4>מוסד: {collage_name}</h4>
        <h5 className="mt-3 text-primary">פרטי התלמיד הנרשם:</h5>
      </header>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col>
            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Label>שם פרטי</Form.Label>
              <Form.Control
                type="text"
                placeholder="הקלד שם פרטי"
                required
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                 הזן שם פרטי
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label>שם משפחה</Form.Label>
              <Form.Control
                type="text"
                placeholder="הקלד שם משפחה"
                required
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                 הזן שם משפחה
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Group className="mb-3" controlId="formIdNum">
              <Form.Label>מס׳ ת״ז</Form.Label>
              <Form.Control
                type="text"
                placeholder="הקלד מס׳ ת״ז"
                required
                value={idNum}
                onChange={e => setIdNum(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                 הזן מספר זהות
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formDOB">
              <Form.Label>תאריך לידה</Form.Label>
              <Form.Control
                type="date"
                placeholder="הקלד תאריך לידה"
                required
                value={dob}
                onChange={e => setDob(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                 הזן  תאריך לידה
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Group className="mb-3" controlId="formGender">
              <Form.Label>מין</Form.Label>
              <Form.Control
                as="select"
                defaultValue={gender}
                onChange={e => setGender(e.target.value)}
              >
                <option value="m">זכר</option>
                <option value="f">נקבה</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formHomephone">
              <Form.Label>טלפון בבית</Form.Label>
              <Form.Control
                type="text"
                placeholder="הקלד טלפון בבית"
                value={homephone}
                onChange={e => setHomephone(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                 הזן  טלפון בבית
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Group className="mb-3" controlId="formMobilephone">
              <Form.Label> טלפון נייד</Form.Label>
              <Form.Control
                type="text"
                placeholder="הקלד טלפון נייד"
                required
                value={mobilephone}
                onChange={e => setMobilephone(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                 הזן  טלפון נייד
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>כתובת אימייל</Form.Label>
              <Form.Control
                type="email"
                placeholder="example@mail.com"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                 הזן  כתובת אימייל
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Group className="mb-3" controlId="formAliyahDate">
              <Form.Label>תאריך עליה</Form.Label>
              <Form.Control
                type="date"
                value={aliyahDate}
                onChange={e => setAliyahDate(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formOriginCountry">
              <Form.Label>ארץ לידה</Form.Label>
              <Form.Control
                as="select"
                defaultValue={originCountry}
                onChange={e => setOriginCountry(e.target.value)}
              >
                <option value="ISR">ישראל</option>
                <option value="ETH">אתיופיה</option>
                <option value="RUS">רוסיה</option>
                <option value="GBR">בריטניה</option>
                <option value="ROU">רומניה</option>
                <option value="AZE">אזרבייג׳ן</option>
                <option value="MDA">מולדובה</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Form.Group as={Col} className="mb-3" controlId="formNationality">
            <Form.Label>לאום</Form.Label>
            <Form.Control
              type="text"
              placeholder="הקלד מוצא"
              required
              value={nation}
              onChange={e => setNation(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
               הזן  לאום
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <div className="d-grid">
          <Button variant="primary" type="submit">
            הרשמה
          </Button>
        </div>
      </Form>
    </MainScreen>
  );
};

export default RegisterPage;
