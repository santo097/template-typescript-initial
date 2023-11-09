import { Config } from './config';
import dotenv from 'dotenv';
dotenv.config();

export const configInstance = new Config(parseInt(process.env.SERVER_PORT || '3007', 10));