import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { filterByString, getBreedAndSubBreed } from '../commons/utils';

const List = ({items, filter}) => {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Breed</th>
        </tr>
      </thead>
      <tbody>
        {
          filterByString(items, filter).map((item, index) => {
            return (
              <tr key={index}>
                <td>{index}</td>
                <td>
                  <Link to={`/breed/${getBreedAndSubBreed(item, '-')}`}>
                    {item.toString()}
                  </Link>
                </td>
              </tr>      
            )
          })
        }
      </tbody>
    </Table>
  );
};

export default List;