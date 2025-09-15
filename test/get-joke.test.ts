import type {Joke} from '../src/interfaces';
import { describe, it, expect, vi ,beforeEach, afterEach} from 'vitest';

/*

let counter = 0;

export const getJoke = async (): Promise<Joke> => {
    counter++;
    if (counter % 2 === 0) {
        return await getDadJoke();
    } else {
        return await getChuckNorrisJoke();
    }
};
*/

import { getJoke } from '../src/acuditsapp/get-joke';
import * as dadJokeModule from '../src/acuditsapp/dad-jokes-app';
import * as chuckNorrisModule from '../src/acuditsapp/chuck-norris-app';

describe('getJoke', () => {
 
    const getDadJokeSpy = vi.spyOn(dadJokeModule, 'getDadJoke').mockResolvedValue({ joke: 'Mocked Dad Joke' });
    const getChuckNorrisJokeSpy = vi.spyOn(chuckNorrisModule, 'getChuckNorrisJoke').mockResolvedValue({ joke: 'Mocked Chuck Norris Joke' });
    
    beforeEach(() => {
        vi.clearAllMocks();
        (getDadJokeSpy as any).mockClear();
        (getChuckNorrisJokeSpy as any).mockClear();
    });

    
    it('should call getChuckNorrisJoke on the first call', async () => {
        const joke = await getJoke();
        
        expect(getChuckNorrisJokeSpy).toHaveBeenCalledTimes(1);
        expect(getDadJokeSpy).not.toHaveBeenCalled();
        expect(joke.joke).toBe('Mocked Chuck Norris Joke');
    });

    it('should call getDadJoke on the second call', async () => {
        vi.resetModules();
        await getJoke(); // Incrementa el contador a 2

        const joke = await getJoke();
        
        expect(getChuckNorrisJokeSpy).toHaveBeenCalledTimes(1);
        expect(getDadJokeSpy).toHaveBeenCalledTimes(1); // Esta es la segunda llamada
        expect(joke.joke).toBe('Mocked Dad Joke');
    });
});