import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Search from './Search';

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
        <Search 
          handlerSearch={(result) => { console.log(result)}}
        />
      </Col>
    </Row>
    <hr/>
  </>
  );
};

export default Main;