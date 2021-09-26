import 'reflect-metadata';
import 'dotenv/config';
import './database/conection';

import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import Routes from './routes';

const app = express();
app.use(morgan('dev'));
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(Routes);

export { app };
