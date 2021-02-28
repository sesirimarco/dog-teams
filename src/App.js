import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import CarouselHead from './components/CarouselHead';
import Main from './components/Main';
import Footer from './components/Footer';
import PageNotFound from './components/PageNotFound';
import Breed from './components/Breed';
import MyTeam from './components/MyTeam';

function App() {
  return (
    <Router>
      <Container>
        <Header />
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
    </Router>
  );
}

export default App;
