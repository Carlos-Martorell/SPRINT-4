
import type {Joke} from '../interfaces';

export const getJoke = async(): Promise<Joke> => {
    const url = `https://icanhazdadjoke.com/`;

    try {
        const resp = await fetch(url, {
            headers: { 'Accept': 'application/json' }
        });

        if (!resp.ok) {
            throw new Error(`Error ${resp.status}: No se pudo obtener el chiste`);
        }

        const data: Joke = await resp.json();
        return data;    
    } catch (err:any) {throw err}
    

}