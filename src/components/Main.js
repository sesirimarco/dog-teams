import React , { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Search from './Search';
import List from './List';
import ModalInfo from './ModalInfo';
import { getAllBreeds } from '../commons/appServices';
import { adaptToSuggestionsBreeds, getBreedAndSubBreed } from '../commons/utils';

const Main = () => {
  const history = useHistory();
  const [allBreeds, setAllBreeds] = useState([]);
  const [searchFilter, setSearchFilter] = useState('');
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  
  useEffect(() => {
    getAllBreeds()
      .then((breeds) => {
        setAllBreeds(adaptToSuggestionsBreeds(breeds));
      })
      .catch((e) => {
        setError({
          title: 'Oops! Somethig went wrong',
          description: e.message,
          type: 'error',
        });
        setShowModal(true);
      });
  }, []);
  return (
    <>
    { 
      (error)
        ? <ModalInfo 
            show={showModal}
            title={error.title}
            description={error.description}
            handleClose={() => {setShowModal(false)}}
            type={error.type}
          />
        : <Row className="pt-5 text-center main">
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
    }
  </>
  );
};

export default Main;