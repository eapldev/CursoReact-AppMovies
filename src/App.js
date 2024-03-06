import Header from './components/Header'
import Footer from './components/Footer'
import Banner from './components/Banner';
import Container from './components/Container';

function App() {
  return (
    <>
    <Header />
    <Banner  image="home"/>
    <Container>
      <h1> Hello World! Olá Mundo!</h1>
      <p> Olá Mundo, estou aprendendo Reackt.Js</p>
    </Container>
      <Footer />
    </>
  );
}

export default App;
