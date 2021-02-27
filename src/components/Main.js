import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Main = () => {
  return (
    <>
    <Row className="welcome text-center pt-4">
      <Col >
        <h3 className="display-4">Pick up your breed</h3>
        <hr/>
      </Col>
    </Row>
    <Row className="py-5 text-center">
      <Col className="col-sm-12">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary">Button</Button>
          </InputGroup.Append>
        </InputGroup>
      </Col>
    </Row>
    <hr/>
  </>
  );
};

export default Main;