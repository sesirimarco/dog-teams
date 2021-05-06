import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import CarouselHead from './components/CarouselHead';
import Main from './components/Main';
import Footer from './components/Footer';
import PageNotFound from './components/PageNotFound';
import Breed from './components/Breed';
import MyTeam from './components/MyTeam';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { TeamContext } from './contexts/TeamContext';

function App() {
  const [teamAmount, setTeamAmount] = useState(0);
  return (
    <Router>
      <TeamContext.Provider value={{teamAmount, setTeamAmount}}>
        <Container className="container-heigth">
          <Header/>
          <Switch>
            <Route exact path="/">
              <CarouselHead />
              <Main />
            </Route>
            <Router path="/my-team">
              <MyTeam />
            </Router>
            <Route path="/breed/:name">
              <Breed />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
          <Footer />
        </Container> 
      </TeamContext.Provider>
    </Router>
  );
}

export default App;
