import { getChuckNorrisJoke } from '../src/acuditsapp/chuck-norris-app.ts';
import { describe, it, expect, vi ,beforeEach, afterEach} from 'vitest';


global.fetch = vi.fn();

describe('getChuckNorrisJoke', () => {

    afterEach(() => {
        vi.clearAllMocks();
    });

    it('should return a joke when the API call is successful', async () => {

        const mockChuckNorrisData = {
            value: "Chuck Norris's jokes are the best."
        };

        (fetch as any).mockResolvedValueOnce({
            ok: true,
            json: async () => mockChuckNorrisData,
        });

        const joke = await getChuckNorrisJoke();

        expect(fetch).toHaveBeenCalledTimes(1);
        expect(joke).toEqual({
            joke: mockChuckNorrisData.value,
        });
    });


    it('should throw an error when the API call fails', async () => {

        (fetch as any).mockResolvedValueOnce({
            ok: false,
            status: 404,
        });

        await expect(getChuckNorrisJoke()).rejects.toThrow('Error 404: No se pudo obtener el chiste de Chuck Norris');
    });
});