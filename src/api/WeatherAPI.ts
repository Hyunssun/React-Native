import axios from "axios";

const API_KEY = "b458d9aadcf6798e2db26c1d7bc6ccf3";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

interface WeatherResponse {
  main: {
    temp: number;
  };
  weather: {
    main: string;
    description: string;
  }[];
}

export const getWeather = async (
  city: string
): Promise<WeatherResponse | null> => {
  try {
    const response = await axios.get(
      `${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}&lang=kr`
    );
    return response.data as WeatherResponse;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};
