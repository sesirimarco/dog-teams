import { useEffect, useState, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';
import { getAllImagesFromBreed } from '../commons/appServices';
import { 
  capitalizeText, 
  getBreedAndSubBreed, 
  getLocalStorageTeam,
  addDogToMyTeam, 
  getDogById,
  checkMaxDogByTeam, 
  checkMaxBreeds,
} from '../commons/utils';

//TODO: loading for images
const Breed = ({handlerTeamAmount}) => {
  
  const { name } = useParams();
  const [ images, setImages ] = useState([]);
  const [ team, setTeam ] = useState([]);
  const idBreedPrefix = getBreedAndSubBreed(name, '_', '-');
  const MAX_DOGS_BY_TEAM = 10;
  const MAX_BREEAD_BY_TEAM = 3;

  useEffect(() => {
    setTeam(getLocalStorageTeam());
    getAllImagesFromBreed(name)
    .then(images => setImages(images));
  }, []);
  useEffect(() => {
      handlerTeamAmount(team.length);
  }, [team]);

  const handlerAddDog = (dog) => {
    if (!getDogById(dog.id)) {
      if (checkMaxDogByTeam(MAX_DOGS_BY_TEAM)) {
        if (checkMaxBreeds(dog.breed, MAX_BREEAD_BY_TEAM)) {
          addDogToMyTeam(dog);
          setTeam(getLocalStorageTeam());
        } else {
          //todo: custom alert with 'go to my team' link
          alert(
            `You can't add more than ${MAX_BREEAD_BY_TEAM} dog(s) with the same breed!`
          );
        }
      } else {
        //todo: custom alert with 'go to my team' link
        alert(`You can't add more than ${MAX_DOGS_BY_TEAM} dog(s) to your team!`);
      }
    } else {
      //todo: custom alert with 'go to my team' link
      alert('This dog already exist in your team!');
    }
  };
  return (
    <>
      <h2 className="display-5 pt-4">{capitalizeText(getBreedAndSubBreed(name, ' ', '-'))}</h2>
      <CardColumns className="pt-4 text-align-center">
        {
          images.length > 0 &&
          images.map((img, index) => (
            <Fragment key={idBreedPrefix + '_' + index}>
              <Card border="secondary card-width">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  {
                    team.find(dog => (dog.id === idBreedPrefix + '_' + index))
                    ? <Button 
                        className="btn-success"
                        block
                        onClick={() => {}}
                      >In your team</Button>
                    : <Button 
                        variant="secondary" 
                        block
                        onClick={() => {
                          handlerAddDog({
                            breed: idBreedPrefix, 
                            img,
                            id: idBreedPrefix + '_' + index,
                          })
                        }}
                      >Add to my team</Button>
                  }
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