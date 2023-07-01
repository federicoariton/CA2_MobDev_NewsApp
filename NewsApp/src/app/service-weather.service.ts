import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API_KEY = environment.api2.API_KEY;
const API_URL = environment.api2.API_URL;

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private httpClient: HttpClient) { }
  
  // Function to fetch weather data for a specific city
  getWeatherData(city: string) {
    return this.httpClient.get<WeatherResponse>(`${API_URL}/weather?q=${city}&appid=${API_KEY}`);
  }
}

// Interface representing the weather response from the API
interface WeatherResponse {
  main: {
    temp: number;
    humidity: number;
    pressure: number;
  };
  
}
