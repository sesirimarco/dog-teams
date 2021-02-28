import React , { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Search from './Search';
import List from './List';
import { getAllBreeds } from '../commons/appServices';
import { adaptToSuggestionsBreeds, getBreedAndSubBreed } from '../commons/utils';

const Main = () => {
  const history = useHistory();
  const [allBreeds, setAllBreeds] = useState([]);
  const [searchFilter, setSearchFilter] = useState('');
  
  useEffect(() => {
    getAllBreeds()
    .then(breeds => {
      setAllBreeds(adaptToSuggestionsBreeds(breeds));
    })
  }, []);

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
          suggestionsBreeds={allBreeds}
          handlerSearch={(result) => { setSearchFilter(result)}}
          handlerSelectBreed={(result) => { 
            history.push(`/breed/${getBreedAndSubBreed(result, '-')}`);
          }}
        />
        <List 
          items={allBreeds}
          filter={searchFilter}
        />
      </Col>
    </Row>
    <hr/>
  </>
  );
};

export default Main;