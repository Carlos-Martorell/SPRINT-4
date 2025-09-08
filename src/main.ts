import './style.css'
import {getJoke} from './acuditsapp/acudits-app'
import type {Joke} from './interfaces';


// aqui tengo que mostrar el chiste en el index.html
const jokeBox = document.getElementById('jokeBox');

const showJoke = async () => { 
  try {
      const jokeData: Joke = await getJoke(); 
      console.log('Chiste obtenido:', jokeData);
      if (jokeBox) {
          jokeBox.innerHTML = `
            <p>${jokeData.joke}</p>
          `;
      }
  } catch (error) {
      console.error('Error al obtener el chiste:', error);
      if (jokeBox) {
          jokeBox.innerHTML = '<p>Lo sentimos, no pudimos cargar el chiste.</p>';
      }
  }
};

showJoke();

const newJokeBtn = document.getElementById('newJokeBtn');
newJokeBtn?.addEventListener('click', showJoke);