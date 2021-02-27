import React, { useState, useEffect } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Typeahead } from 'react-bootstrap-typeahead';
import { searchByBreedName, getAllBreeds } from '../commons/appServices';
import 'react-bootstrap-typeahead/css/Typeahead.css';

const Search = ({handlerSearch}) => {
  const [suggestionsBreeds, setSuggestionsBreeds] = useState([]);
  const [breed, setBreed] = useState();

  useEffect(() => {
    getAllBreeds()
    .then(allBreeds => {
      setSuggestionsBreeds(allBreeds);
    })
  }, []);
  return (
     
    <Form>
      <InputGroup className="mb-3">
        <Typeahead
          id="basic-example"
          onChange={setBreed}
          options={suggestionsBreeds}
          placeholder="Choose a breed..."
          defaultSelected={breed}
        />
        <InputGroup.Append>
          <Button 
            variant="outline-secondary" 
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              searchByBreedName(breed)
              .then(data => {
                handlerSearch(data);
              })
            }}
          >
            Search
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
};
export default Search;