// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBYcnzuRnQ4vPo40yEVXlZEQGyF7aJ_iQk',
    authDomain: 'businesscontacts-c4faa.firebaseapp.com',
    databaseURL: 'https://businesscontacts-c4faa.firebaseio.com',
    projectId: 'businesscontacts-c4faa',
    storageBucket: 'businesscontacts-c4faa.appspot.com',
    messagingSenderId: '654662504106'
  }
};