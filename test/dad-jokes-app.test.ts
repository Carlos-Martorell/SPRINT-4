import { getDadJoke } from '../src/acuditsapp/dad-jokes-app.ts';
import { describe, it, expect, vi ,beforeEach, afterEach} from 'vitest';


global.fetch = vi.fn();

describe('getDadJoke', () => {

    afterEach(() => {
        vi.clearAllMocks();
    });


    it('should return a dad joke when the API call is successful', async () => {

        const mockDadJokeData = {
            joke: "Why don't scientists trust atoms? Because they make up everything."
        };
        
        (fetch as any).mockResolvedValueOnce({
            ok: true,
            json: async () => mockDadJokeData,
        });

        const joke = await getDadJoke();

        expect(fetch).toHaveBeenCalledTimes(1);
        expect(joke).toEqual({
            joke: mockDadJokeData.joke,
        });
    });

    it('should throw an error when the API call fails', async () => {

       
        (fetch as any).mockResolvedValueOnce({
            ok: false,
            status: 404,
        });

        await expect(getDadJoke()).rejects.toThrow('Error 404: No se pudo obtener el chiste');
    });
});