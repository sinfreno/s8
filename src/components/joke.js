import {useState} from 'react';

const Joke = () => {

  const [jokes, setJokes] = useState("");

  const getJokes = () => {
    fetch('https://icanhazdadjoke.com/slack') 
    .then(res => res.json()) 
    .then(res => setJokes(res.attachments[0].text)); 
  }; 
  return (
    <div>
        <div>{jokes}</div>
        <button onClick={() => getJokes()}> Siguiente chiste </button>
    </div>

  )

}


export default Joke;