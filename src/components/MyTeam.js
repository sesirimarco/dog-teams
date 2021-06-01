import { useState, useEffect, Fragment, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';
import { 
  getLocalStorageTeam,
  removeDogFromMyTeam,
 
} from '../commons/utils';
import { useImagesLoaded } from '../hooks/useImagesLoaded';
import LoadingSpinner from './LoadingSpinner';
import { TeamContext } from '../contexts/TeamContext';

const MyTeam = () => {
  const { setTeamAmount } = useContext(TeamContext);
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
      setTeamAmount(team.length);
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
                          onError={setImageLoaded} /*TODO: show default thumbnail when image load get error*/
                        />
                        <Card.Body>
                          {
                            <Button 
                                className="btn-success" 
                                block
                                onClick={() => {
                                  removeDogFromMyTeam(id);
                                  setTeam(getLocalStorageTeam());
                                  setTeamAmount(team.length);
                                }}
                            >Gimme a break!</Button>
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