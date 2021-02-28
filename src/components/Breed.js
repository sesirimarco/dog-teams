import { useEffect, useState, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';
import { getAllImagesFromBreed } from '../commons/appServices';
import { capitalizeText, getBreedAndSubBreed } from '../commons/utils';

//TODO: loading for images
const Breed = () => {
  const { name } = useParams();
  const [ images, setImages ] = useState([]);
  useEffect(() => {
    getAllImagesFromBreed(name)
    .then(images => setImages(images));
  }, []);
  return (
    <>
      <h2 className="display-5 py-4">{capitalizeText(getBreedAndSubBreed(name, ' ', '-'))}</h2>
      <hr />
      <CardColumns className="py-4 text-align-center">
        {
          images.length > 0 &&
          images.map((img, index) => (
            <Fragment key={index}>
              <Card border="secondary card-width">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Button variant="secondary" block>Add to my team</Button>
                </Card.Body>
              </Card>
            </Fragment> 
          ))
        }
      </CardColumns>
    </>
  )
};
export default Breed;