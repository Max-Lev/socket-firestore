// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  websocket_url: 'http://localhost:3000',
  firebaseConfig: {
    apiKey: "AIzaSyCE4gXy1q6sF_xbtlSRUTqS0RrchmNXAfo",
    authDomain: "artists-55df5.firebaseapp.com",
    databaseURL: "https://artists-55df5.firebaseio.com",
    projectId: "artists-55df5",
    storageBucket: "artists-55df5.appspot.com",
    messagingSenderId: "224820062618",
    uid: "fdb3a00f-371f-4bee-96f4-2d13d3abe2cd"
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
