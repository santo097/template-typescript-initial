import express, {Request,Response} from 'express';
import { Config } from './shared/infrastructure/config';
import { configInstance } from './shared/infrastructure/dependencies';


class Server{
    private server: express.Application;
    private config: Config;

    constructor(config:Config){
        this.config = config;
        this.server = express();
        this.setupRoutes();
    }

    private setupRoutes(): void {
        this.server.get('/', (req:Request, res:Response) =>{
            res.send('Ruta principal');
        });
    }

    startServer():void{
        this.server.listen(this.config.getPort(), () =>{
            console.log(`Server on port: ${this.config.getPort()}`);
        });
    }
}

const server = new Server(configInstance);

server.startServer();