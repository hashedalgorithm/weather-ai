import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express from 'express';
import loadRoutes from './loaders/routes.js';

dotenv.config();
const expressApp = express();

expressApp.use(bodyParser.json());
loadRoutes(expressApp);

export default expressApp;
