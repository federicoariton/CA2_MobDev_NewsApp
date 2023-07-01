import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { environment } from 'src/environments/environment';

const api1Key = environment.api2.API_KEY;
const api1Url = environment.api2.API_URL;


interface WeatherResponse {
  main: {
    temp: number;
    humidity: number;
    pressure: number;
  };
  // Other properties from the response if needed
}


@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {
  weatherValues : any
  constructor(public httpClient:HttpClient) {
    this.loadData()
  }

  loadData(){
    this.httpClient.get<WeatherResponse>(`${api1Url}/weather?q=${"Dublin"}&appid=${api1Key}`).subscribe(results =>{
      console.log(results);
      this.weatherValues = results.main

  })
}

  ngOnInit() {
  }

}


// this.httpClient.get<WeatherResponse>(`${api1Url}/weather?q=${"Dublin"}&appid=${api1Key}`).subscribe(results =>{
//   console.log(results);
//   this.weatherValues = results.main