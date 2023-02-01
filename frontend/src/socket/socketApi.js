import io from "socket.io-client";

const ENDPOINT = process.env.REACT_APP_SERVER_URL;

const socket = io.connect(process.env.REACT_APP_SERVER_URL);

export default socket;

export function socket_init(){
    console.log('connected to socket')
}