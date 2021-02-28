import { useState, useEffect, Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';
import { 
  getLocalStorageTeam,
  removeDogFromMyTeam,
 
} from '../commons/utils';
const MyTeam = () => {
  const [team, setTeam] = useState([]);
  
  useEffect(() => {
    setTeam(getLocalStorageTeam());
  }, []);
  return (
    <>
      <h2 className="display-5 py-4">My Dream Team!</h2>
      <hr />
      <CardColumns className="py-4 text-align-center">
        {
          team.map(({id, img}) => (
            <Fragment key={id}>
              <Card border="secondary card-width">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  {
                    <Button 
                        variant="success" 
                        block
                        onClick={() => {
                          removeDogFromMyTeam(id);
                          setTeam(getLocalStorageTeam());
                        }}
                    >Remove me!</Button>
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
export default MyTeam;