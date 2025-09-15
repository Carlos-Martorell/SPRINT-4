import { describe, it, expect, vi, afterEach } from 'vitest';
import { getWeather } from '../src/weatherapp/weather-app';


global.fetch = vi.fn();

describe('getWeather', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should return weather data on a successful API call', async () => {

    const mockWeatherData = {
      metadata: { name: 'Barcelona' },
      data_1h: { temperature: [15], pictocode: [1] },
      units: { temperature: 'C' },
    };


    (fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => mockWeatherData,
    });

    const weatherData = await getWeather();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(weatherData).toEqual(mockWeatherData);
  });

  it('should throw an error on a failed API call', async () => {
  
    (fetch as any).mockResolvedValueOnce({
      ok: false,
      status: 404,
    });

    await expect(getWeather()).rejects.toThrow(
      'Error 404: Weather data not found'
    );
  });
});