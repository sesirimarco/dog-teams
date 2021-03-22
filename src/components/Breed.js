import { useEffect, useState, Fragment } from 'react';
import { useImagesLoaded } from '../hooks/useImagesLoaded';
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
import LoadingSpinner from '../components/LoadingSpinner';
import ModalInfo from '../components/ModalInfo';
import GoBack from '../components/GoBack';

const Breed = ({handlerTeamAmount}) => {
  
  const { name } = useParams();
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  
  const [
    setTotalImages,
    setImageLoaded,
    allImagesDone,
    porc,
  ] = useImagesLoaded();
  const [ team, setTeam ] = useState([]);
  const idBreedPrefix = getBreedAndSubBreed(name, '_', '-');
  const MAX_DOGS_BY_TEAM = 10;
  const MAX_BREEAD_BY_TEAM = 3;

  useEffect(() => {
    setTeam(getLocalStorageTeam());
    getAllImagesFromBreed(name)
    .then(images => {
      setImages(images);
      setTotalImages(images.length);
    })
    .catch((e) => {
      setError({
        title: 'Opps!',
        description: e.message,
        type: 'error',

      });
      setShowModal(true);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps,
  }, []);
  
  useEffect(() => {
      handlerTeamAmount(team.length);
      // eslint-disable-next-line react-hooks/exhaustive-deps,
  }, [team]);

  const handlerAddDog = (dog) => {
    if (!getDogById(dog.id)) {
      if (checkMaxDogByTeam(MAX_DOGS_BY_TEAM)) {
        if (checkMaxBreeds(dog.breed, MAX_BREEAD_BY_TEAM)) {
          addDogToMyTeam(dog);
          setTeam(getLocalStorageTeam());
        } else {
          
          setError({
            title: 'Ey!',
            description: `You can't add more than ${MAX_BREEAD_BY_TEAM} dogs with the same breed!`,
            type: 'info',
          });
          setShowModal(true);
        }
      } else {
        setError({
          title: 'Ey!',
          description: `You can't add more than ${MAX_DOGS_BY_TEAM} dogs to your team!`,
          type: 'info',
        });
        setShowModal(true);
      }
    } else {
      
      setError({
        title: 'Ey!',
        description: `This dog already exist in your team!`,
        type: 'info',
      });
      setShowModal(true);
    }
  };
  return (
    <>
      {error ? (
        <>
          <ModalInfo
            show={showModal}
            title={error.title}
            description={error.description}
            handleClose={() => {
              setShowModal(false);
            }}
            type={error.type}
          />
          <GoBack path="/" alignItems="center" justifyContent="center" />
        </>
      ) : (
        <div className="breed-gallery">
          {
            !allImagesDone && 
            <LoadingSpinner porc={porc} />
          }
          <div className={allImagesDone ? 'gallery-show' : 'd-none'}>
            <h2 className="display-5 pt-4">
              {capitalizeText(getBreedAndSubBreed(name, ' ', '-'))}
            </h2>
            <CardColumns className={`pt-4 text-align-center`}>
              {
                images.map((img, index) => (
                  <Fragment key={idBreedPrefix + '_' + index}>
                    <Card border="secondary card-width">
                      <Card.Img
                        variant="top"
                        alt={idBreedPrefix}
                        src={img}
                        onLoad={setImageLoaded}
                        onError={setImageLoaded} //TODO: Hide Card if image get error
                      />
                      <Card.Body>
                        {team.find(
                          (dog) => dog.id === idBreedPrefix + '_' + index
                        ) ? (
                          <Button
                            className="btn-success"
                            block
                            onClick={() => {}}
                          >
                            In your team
                          </Button>
                        ) : (
                          <Button
                            variant="secondary"
                            block
                            onClick={() => {
                              handlerAddDog({
                                breed: idBreedPrefix,
                                img,
                                id: idBreedPrefix + '_' + index,
                              });
                            }}
                          >
                            Add to my team
                          </Button>
                        )}
                      </Card.Body>
                    </Card>
                  </Fragment>
                ))
              }
            </CardColumns>
          </div>
        </div>
      )}
    </>
  );
};
export default Breed;