import type {Weather}  from './interfaces';


const lat = 41.3879; // Latitud de Barcelona
const lon = 2.16992; // Longitud de Barcelona
const apiKey = 'peow3uErzCsdjy1g'; // Reemplaza con tu API key real
const apiUrl = `https://my.meteoblue.com/packages/basic-1h_basic-day?lat=${lat}&lon=${lon}&apikey=${apiKey}`;


const getWeather = async(): Promise<Weather> =>  {   
    
    try {            
    const resp = await fetch(apiUrl) // fetch devuelve Promise<Response>
        console.log({resp});
        if (!resp.ok) {
          throw new Error(`Error ${resp.status}: Weather data not found`);
        }
        const data: Weather = await resp.json();
        return data;
     } catch (err:any) {throw err}
    }




    const weatherHeader = document.getElementById('weather-header');
 
    
  export  const fetchAndShowWeather = async () => {
        try {
            const weatherData: Weather = await getWeather();
            console.log('Información del clima:', weatherData);
            
            // **Lógica para mostrar el clima en el header**
            displayWeather(weatherData);
    
        } catch (error) {
            console.error('Error al obtener el clima:', error);
            if (weatherHeader) {
                weatherHeader.innerHTML = '<span>Error al cargar el clima.</span>';
            }
        }
    };
    
    const formatPictocode = (code: number): string => {
        return code < 10 ? `0${code}` : `${code}`;
    };
    
    const getLocalIconPath = (pictocode: number): string => {
        const formattedCode = formatPictocode(pictocode);
        return `./src/assets/weather-icons/${formattedCode}_day.png`;
    };

    const displayWeather = (data: Weather) => {
        if (!weatherHeader) return;
    
        const cityName = `Barcelona`;
        const currentTemp = data.data_1h.temperature[0];
        const tempUnit = data.units.temperature;
        const pictocode = data.data_1h.pictocode[0];
        const iconPath = getLocalIconPath(pictocode);;

        console.log('Icon URL:', iconPath);
        console.log({cityName,currentTemp,tempUnit,pictocode});

        weatherHeader.innerHTML = `
            <div class="flex flex-col items-start gap-1 m-2 ml-5">
                <span class="text-xl font-bold">${cityName}</span>
                <div class="flex items-center gap-2">
                    <img src="${iconPath}" alt="Weather icon" class="w-10 h-10  shadow-xl rounded-xl">
                    <span class="text-3xl font-light">${currentTemp}°${tempUnit}</span>
                </div>
            </div>
        `;
    };
    
