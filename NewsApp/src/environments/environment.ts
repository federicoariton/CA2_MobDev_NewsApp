// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api1:{
  API_KEY:'0c7af02cf1a0473d8459409a926f839a',
  API_URL:'https://newsapi.org/v2'
  },
  api2:{
    API_KEY:'e0620f21b4b3902dc0f7e0033dbb15e9',
    API_URL:'https://api.openweathermap.org/data/2.5'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
