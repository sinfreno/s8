import {useState, useEffect} from 'react';
import {Btn, Container} from '../styles/style'
const Joke = () => {

  const [jokes, setJokes] = useState("");

  const getJokes = () => {
    fetch('https://icanhazdadjoke.com/slack') 
    .then(res => res.json()) 
    .then(res => setJokes(res.attachments[0].text)); 
  }; 

  const [tiempo, setTiempo] = useState("");

  useEffect(() => {
    fetch('https://www.el-tiempo.net/api/json/v2/home') 
    .then(res => res.json()) 
    .then(res => setTiempo(res.ciudades[0].stateSky.description)); 
  },[]);


  return (
    <Container>
        {tiempo}
        <br></br><br></br>
        {jokes}
        <br></br>
        <Btn onClick={() => getJokes()}> Siguiente chiste </Btn>
    </Container>

  )

}


export default Joke;