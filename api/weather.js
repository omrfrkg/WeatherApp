import axios from "axios";
import { apiKey } from "../constants";

const forecastEndPoint = (
  params
) => `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.cityName}&days=${params.days}&aqi=no&alerts=no
`;
const locationEndPoint = (params) =>
  `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${params.cityName}`;

const apiCall = async (endpoint) => {
  const options = {
    method: "GET",
    url: endpoint,
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log("error : ", error);
    return null;
  }
};

export const fetchWeatherForeCast = (params) => {
  return apiCall(forecastEndPoint(params));
};

export const fetchLocations = (params) => {
  return apiCall(locationEndPoint(params));
};
