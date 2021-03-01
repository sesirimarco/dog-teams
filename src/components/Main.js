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
    <Row className="pt-5 text-center main">
      <Col className="col-sm-12">
        <Search 
          suggestionsBreeds={allBreeds}
          handlerSearch={(result) => { setSearchFilter(result)}}
          handlerSelectBreed={(result) => { 
            if(result?.length > 0) {
              history.push(`/breed/${getBreedAndSubBreed(result, '-')}`);
            }
          }}
        />
        <List 
          items={allBreeds}
          filter={searchFilter}
        />
      </Col>
    </Row>
  </>
  );
};

export default Main;