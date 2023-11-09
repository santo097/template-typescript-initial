export class Config {   
    constructor( readonly port:number){
    }

    getPort(): number {
        return this.port;
    }
}