import express, { json } from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';

//Importing routes
import meetingRoutes from './routes/meetings';

//Initialization
const app = express();

// middlewares
app.use(morgan('dev')); // para entender por consola lo que viene llegandi
app.use(json()); // para entender datos en formato json

app.use(bodyParser.urlencoded({
    extended: true
}));

//Allow Access-Control-Allow-Origin
app.use(cors());

// routes
app.use('/api/meetings', meetingRoutes);

export default app;