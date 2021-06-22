import {useState} from 'react';
import {Btn, Container} from '../styles/style'
const Joke = () => {

  const [jokes, setJokes] = useState("");

  const getJokes = () => {
    fetch('https://icanhazdadjoke.com/slack') 
    .then(res => res.json()) 
    .then(res => setJokes(res.attachments[0].text)); 
  }; 
  return (
    <Container>
        {jokes}
        <br></br>
        <Btn onClick={() => getJokes()}> Siguiente chiste </Btn>
    </Container>

  )

}


export default Joke;