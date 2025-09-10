import type {Joke} from '../interfaces';
import {getDadJoke} from './dad-jokes-app'
import {getChuckNorrisJoke} from './chuck-norris-app'




let counter = 0;

export const getJoke = async (): Promise<Joke> => {
    counter++;
    if (counter % 2 === 0) {
        return await getDadJoke();
    } else {
        return await getChuckNorrisJoke();
    }
};


