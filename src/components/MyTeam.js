import { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';
import { 
  getLocalStorageTeam,
  removeDogFromMyTeam,
 
} from '../commons/utils';
const MyTeam = ({handlerTeamAmount}) => {
  const [team, setTeam] = useState([]);
  
  useEffect(() => {
    setTeam(getLocalStorageTeam());
  }, []);
  useEffect(() => {
      handlerTeamAmount(team.length);
  }, [team]);
  return (
    <>
      <h2 className="display-5 pt-4">My Dream Team!</h2>
      <CardColumns className="pt-4 text-align-center">
        {
          (team.length > 0) &&
           team.map(({id, img}) => (
              <Fragment key={id}>
                <Card border="secondary card-width">
                  <Card.Img variant="top" src={img} />
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
      {
        (team.length === 0) &&
          <h4>
            <a href="/">You need more players!</a>
          </h4>
      }
    </>
  )
};
export default MyTeam;