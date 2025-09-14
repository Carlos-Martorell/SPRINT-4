import './style.css'
import {getJoke} from './acuditsapp/get-joke'
import {getSelectedScore,resetRatingSelection, setupRatingLogic} from './rating-app'
import type {Joke, Report} from './interfaces';
import  {fetchAndShowWeather} from './weatherapp/weather-app'
import  {setRandomBlobBackground} from './assets/blob-css/blob'

const jokeBox = document.getElementById('jokeBox');
const newJokeBtn = document.getElementById('newJokeBtn');
let currentJokeData: Joke | null = null;
let reportJokes: Report[] = []; 

const showJoke = async () => { 
  try {
      const jokeData: Joke = await getJoke(); 
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

  if (currentJokeData && score !== null) {
          reportJokes.push({
          joke: currentJokeData.joke,
          score: score,
          date: new Date().toISOString()
      });
      console.log('Reporte de chistes:', reportJokes);
  }
  setRandomBlobBackground();
  resetRatingSelection();
  showJoke();
});


document.addEventListener('DOMContentLoaded', () => {
  setupRatingLogic(); 
  showJoke(); 
  fetchAndShowWeather();
  setRandomBlobBackground();
});