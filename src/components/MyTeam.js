import { useState, useEffect, Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { 
  getLocalStorageTeam,
  removeDogFromMyTeam,
 
} from '../commons/utils';
import { useImagesLoaded } from '../hooks/useImagesLoaded';
import LoadingSpinner from './LoadingSpinner';

const MyTeam = ({handlerTeamAmount}) => {
  const [team, setTeam] = useState([]);
  const [ 
    setTotalImages, 
    setImageLoaded, 
    allImagesDone,
    porc, 
  ] = useImagesLoaded();
  
  useEffect(() => {
    setTeam(getLocalStorageTeam());
  }, []);
  useEffect(() => {
      handlerTeamAmount(team.length);
      setTotalImages(team.length);
      // eslint-disable-next-line react-hooks/exhaustive-deps,
  }, [team]);
  return (
    <>
      { 
        team.length > 0 &&
        <div className="team-gallery">
        {
            !allImagesDone && 
            <LoadingSpinner porc={porc}/>
          }
          <div className={ allImagesDone ? 'gallery-show' : 'd-none'}>
            <h2 className="display-5 pt-4">My Dream Team!</h2>
            <CardColumns className="pt-4 text-align-center">
              {
                team.map(({id, img}) => (
                    <Fragment key={id}>
                      <Card border="secondary card-width">
                        <Card.Img 
                          variant="top" 
                          src={img} 
                          onLoad={setImageLoaded}
                          onError={setImageLoaded}
                        />
                        <Card.Body>
                          {
                            <Button 
                                className="btn-success" 
                                block
                                onClick={() => {
                                  removeDogFromMyTeam(id);
                                  setTeam(getLocalStorageTeam());
                                  handlerTeamAmount(team.length);
                                }}
                            >Remove me!</Button>
                          }
                        </Card.Body>
                      </Card>
                    </Fragment> 
                  ))
                
                
              }
            </CardColumns>
          </div>
        </div>
      }
      {
        (team.length === 0) &&
          <div className="team-need-more-player">
            <h4>
              <a href="/">You need more players!</a>
            </h4>
          </div>
      }
    </>
  )
};
export default MyTeam;