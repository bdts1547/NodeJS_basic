
import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoute from './route/web';
// import connection from './configs/connectDB';

require('dotenv').config();



const app = express();
const port = process.env.PORT;

// Support sending data from client to server
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Setup view engine
configViewEngine(app);

// Setup web router
initWebRoute(app);

app.listen(port, () => {
    console.log('runnging')
});