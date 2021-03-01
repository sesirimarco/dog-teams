import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

const Search = ({ suggestionsBreeds, handlerSearch, handlerSelectBreed }) => {
  const [breed, setBreed] = useState();
  return (
    <Form>
      <InputGroup className="mb-3">
        <Typeahead
          onInputChange={handlerSearch}
          id="basic-example"
          onChange={(breeds) => {
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
              handlerSelectBreed(breed);
            }}
          >
            Go!
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
};
export default Search;