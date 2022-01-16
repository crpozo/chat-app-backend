const express = require('express')
const cors = require('cors')

const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1332579",
  key: "b1a4432e58903dd6bed4",
  secret: "06b6af756a324ebc05ec",
  cluster: "eu",
  useTLS: true
});

const app = express();

// Cross-Origin Resource Sharing: Specify which origins can access the API
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:8080','http://localhost:4200']
}))

app.use(express.json())

app.post( '/api/messages', async (req, res) =>  {
  await pusher.trigger("chat", "message", {
    username: req.body.username,
    message: req.body.message
  });
  res.json([]);
})

console.log("Listening to port 8000")
app.listen(8000);