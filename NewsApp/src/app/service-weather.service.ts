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

  getWeatherData(city: string) {
    return this.httpClient.get<WeatherResponse>(`${API_URL}/weather?q=${city}&appid=${API_KEY}`);
  }
}

interface WeatherResponse {
  main: {
    temp: number;
    humidity: number;
    pressure: number;
  };
  // Other properties from the response if needed
}
