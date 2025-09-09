import './style.css'
import {getJoke} from './acuditsapp/acudits-app'
import {getSelectedScore, setupRatingLogic} from './acuditsapp/rating-app'
import type {Joke, Report} from './interfaces';



const jokeBox = document.getElementById('jokeBox');
const newJokeBtn = document.getElementById('newJokeBtn');
let currentJokeData: Joke | null = null;
let reportJokes: Report[] = []; 



const showJoke = async () => { 
  try {
      const jokeData: Joke = await getJoke(); 
      console.log('Chiste obtenido:', jokeData);
      if (jokeBox) {
          jokeBox.innerHTML = `
            <p>${jokeData.joke}</p>
          `;
          currentJokeData = jokeData;
      }
  } catch (error) {
      console.error('Error al obtener el chiste:', error);
      if (jokeBox) {
          jokeBox.innerHTML = '<p>Lo sentimos, no pudimos cargar el chiste.</p>';
      }
  }
};


newJokeBtn?.addEventListener('click', () => {

  const score = getSelectedScore();

  // 2. Si hay una puntuación, guarda el chiste en el array.
  if (currentJokeData && score !== null) {
          reportJokes.push({
          joke: currentJokeData.joke,
          score: score,
          date: new Date().toISOString()
      });
      console.log('Reporte de chistes:', reportJokes);
  }

  showJoke();
});


document.addEventListener('DOMContentLoaded', () => {
  setupRatingLogic(); 
  showJoke(); 
});