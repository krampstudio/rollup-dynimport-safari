import app from './src/app.js';

app()
    .then( () => console.log('done'))
    .catch( err => console.error(err));
