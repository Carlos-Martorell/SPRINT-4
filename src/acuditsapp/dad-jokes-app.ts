
import type {dadJoke, Joke} from '../interfaces';

export const getDadJoke = async(): Promise<Joke> => {
    const url = `https://icanhazdadjoke.com/`;

    try {
        const resp = await fetch(url, {
            headers: { 'Accept': 'application/json' }
        });

        if (!resp.ok) {
            throw new Error(`Error ${resp.status}: No se pudo obtener el chiste`);
        }

        const data: dadJoke = await resp.json();
        return {
            joke: data.joke,
          }
        ;    
    } catch (err:any) {throw err}
    

}