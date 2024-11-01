import express from 'express';
import routes from './routes';
import conn from './db/conn';
import path from 'path';
import cors from 'cors';

class App{
    constructor(){
        this.server = express();

        conn();

        this.middlewares();

        this.routes();
    }

    middlewares(){
        this.server.use(cors());
        this.server.use('/files', express.static(path.resolve(__dirname, '..','uploads')));
        this.server.use(express.json());

    }

    routes(){
        this.server.use(routes)
    }

}

export default new App().server;
