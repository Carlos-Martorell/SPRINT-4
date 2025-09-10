import type {ChuckNorris, Joke} from '../interfaces';

const chuckURL = "https://api.chucknorris.io/jokes/random"

export const getChuckNorrisJoke = async ():Promise<Joke> => {
    try{
        const resp = await fetch (chuckURL)
        if(!resp.ok){
            throw new Error(`Error ${resp.status}: No se pudo obtener el chiste de Chuck Norris`);
        }
        const data: ChuckNorris = await resp.json();
        return {
            joke: data.value,
        };
    } catch (err:any) {
        throw err   
    }
}