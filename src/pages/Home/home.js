import React from 'react';
import {Container, Btn} from '../../styles/style'
import { Link } from 'react-router-dom';



function Home() {

  return (
    <Container> 
        <h2>Entra y descubre los mejores chistes</h2>
        <Btn> <Link to="/bromas">Entrar</Link> </Btn>
    </Container>  
  );
}

export default Home;