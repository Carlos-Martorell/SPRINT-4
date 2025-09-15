
import { describe, it, expect, vi ,beforeEach, afterEach} from 'vitest';

import { getJoke, resetCounter } from '../src/acuditsapp/get-joke';
import * as dadJokeModule from '../src/acuditsapp/dad-jokes-app';
import * as chuckNorrisModule from '../src/acuditsapp/chuck-norris-app';

describe('getJoke', () => {
 
    let getDadJokeSpy: any
    let getChuckNorrisJokeSpy:any

    beforeEach(() => {
        vi.clearAllMocks();
        vi.resetModules();
        resetCounter();
         getDadJokeSpy = vi.spyOn(dadJokeModule, 'getDadJoke').mockResolvedValue({ joke: 'Mocked Dad Joke' });
         getChuckNorrisJokeSpy = vi.spyOn(chuckNorrisModule, 'getChuckNorrisJoke').mockResolvedValue({ joke: 'Mocked Chuck Norris Joke' });
    
    });

    
    it('should call getChuckNorrisJoke on the first call', async () => {
        const joke = await getJoke();
        
        expect(getChuckNorrisJokeSpy).toHaveBeenCalledTimes(1);
        expect(getDadJokeSpy).not.toHaveBeenCalled();
        expect(joke.joke).toBe('Mocked Chuck Norris Joke');
    });

    
    it('should call getDadJoke on the second call', async () => {
        vi.resetModules();
        
        await getJoke(); 
        const joke = await getJoke();
        
        expect(getChuckNorrisJokeSpy).toHaveBeenCalledTimes(1);
        expect(getDadJokeSpy).toHaveBeenCalledTimes(1); 
        expect(joke.joke).toBe('Mocked Dad Joke');
    });
});