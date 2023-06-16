import express, { Express } from 'express';
import { createServer, Server as HTTPServer } from 'http';
import { Server as SocketIOServer, Socket } from 'socket.io';
import path from 'path';
import Sockets from './socket';

class ChatServer {
  private app: Express;
  private server: HTTPServer;
  private io: SocketIOServer;
  private port: number;

  constructor(port: number) {
    this.port = port;
    this.app = express();
    this.server = createServer(this.app);
    this.io = new SocketIOServer(this.server);
  }
  middleware(): void {
    this.app.use(express.static(path.join(__dirname, '../../public')));
  }

  configurationSocket(): void {
    new Sockets(this.io);
  }

  start(): void {
    this.middleware();
    this.configurationSocket();

    this.server.listen(this.port, () => {
      console.log(`Example app listening at http://localhost:${this.port}`);
    });
  }
}

export default ChatServer;
