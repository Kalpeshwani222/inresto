import io from "socket.io-client";

const ENDPOINT = "http://localhost:8000";
const socket = io.connect("http://localhost:8000");

export default socket;

export function socket_init(){
    console.log('connected to socket')
}