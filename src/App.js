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

function App() {
  const [teamAmount, setTeamAmount] = useState(0);
  return (
    <Router>
      <Container className="container-heigth">
        <Header teamAmount={teamAmount}/>
        <Switch>
          <Route exact path="/">
            <CarouselHead />
            <Main />
          </Route>
          <Router path="/my-team">
            <MyTeam handlerTeamAmount={(teamAmount) => setTeamAmount(teamAmount)}/>
          </Router>
          <Route path="/breed/:name">
            <Breed handlerTeamAmount={(teamAmount) => setTeamAmount(teamAmount)}/>
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        <Footer />
      </Container> 
    </Router>
  );
}

export default App;
