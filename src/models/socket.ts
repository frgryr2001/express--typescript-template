import SocketIO, { Socket } from 'socket.io';

class Sockets {
  private io: SocketIO.Server;
  constructor(io: SocketIO.Server) {
    this.io = io;
    this.socketEvents();
  }

  socketEvents() {
    this.io.on('connection', (socket: Socket) => {
      socket.on('message-to-server', (data: { text: string }) => {
        this.io.emit('message-to-client', {
          msg: data.text,
        });
      });
    });
  }
}

export default Sockets;
