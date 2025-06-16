import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, WebSocket } from 'ws';

@WebSocketGateway(3002)
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('sendMessage')
  handleMessage(
    @ConnectedSocket() client: WebSocket,
    @MessageBody() payload: any,
  ) {
    console.log('Received:', payload);
    this.server.clients.forEach((c) => {
      if (c !== client && c.readyState === WebSocket.OPEN) {
        c.send(JSON.stringify({ event: 'message', data: `Echo: ${payload.text}` }));
      }
    });
  }

  afterInit() {
    console.log('WebSocket Server initialized on port 3002');
  }

  handleConnection(client: WebSocket) {
    console.log('Client connected');
  }

  handleDisconnect(client: WebSocket) {
    console.log('Client disconnected');
  }
}