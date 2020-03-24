import io from 'socket.io-client';

export default function websocket(id) {
  const socket = io('http://10.0.2.2:3000', {
    query: {
      user: id,
    },
  });
  return socket;
}
