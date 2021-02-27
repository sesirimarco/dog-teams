import React, { useState, useEffect } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { searchByBreedName } from '../commons/appServices';

const Search = ({ suggestionsBreeds, handlerSearch }) => {
  const [breed, setBreed] = useState();
  return (
    <Form>
      <InputGroup className="mb-3">
        <Typeahead
          onInputChange={handlerSearch}
          id="basic-example"
          onChange={(breeds) => {
            console.log(breeds)
            setBreed(breeds);
            handlerSearch(breeds.toString());
          }}
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
              searchByBreedName(breed).then((data) => {
                handlerSearch(data);
              });
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