import express, { Express } from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import path from 'path';
const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

const app: Express = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, '../public')));

io.on('connection', (client) => {
  console.log('a user connected');
});

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
