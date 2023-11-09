import dotenv from 'dotenv';
import express from 'express';

dotenv.config();
const server = express();
const port = process.env.SERVER_PORT;

server.get('/', (req,res) =>{
    res.send('The sedulous hyena ate');
});

server.listen(port, () =>{
    console.log('Server on port:'+ port);
});