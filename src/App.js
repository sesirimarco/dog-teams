import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import CarouselHead from './components/CarouselHead';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <CarouselHead />
        <Main />
        <Footer />
      </Container> 
    </div>
  );
}

export default App;
