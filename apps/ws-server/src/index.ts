import { WebSocketServer } from "ws";
import { client } from "@repo/db/client";

const wss = new WebSocketServer({ port: 3001 });

wss.on("connection", async(socket) => {
    const res=await client.user.create({
    data: {
      username: Math.random().toString(),
      password: Math.random().toString(),
    },
  });

  console.log(res);
  socket.send("Hello from websocket server");
});
