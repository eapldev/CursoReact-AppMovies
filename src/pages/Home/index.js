import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner';
import Container from '../../components/Container';
import Card from '../../components/Card';
import Category, { categories, filterCategory } from '../../components/Category';
import { useState } from 'react';

function Home() {

  // Hook //
  const [ nome, setNome ] = useState()

  // let nomeDigitado = ''
  function pegarNome(event) {
    console.log(event.target.value)
    // nomeDigitado = event.target.value
    setNome(event.target.value)
  }


  return (
    <>
      <Header />
      <Banner image="home" />
      <Container>

        <input 
          type="text"
          placeholder="Nome"
          onChange={pegarNome}
        />
        <h2>{nome}</h2>
        
        {/* {categories.map((category, index) =>
          <Category category={category}>
            {filterCategory(index).map((video) => <Card id={video.id} key={video.id} />)}
          </Category>
        )} */}

      </Container>
      <Footer />
    </>
  );
}

export default Home
