console.log("hello world");
import express from "express"
const app = express()
const port =process.env.port||5000

app.get('/', (req, res) => {
  res.send('Hello World!');
  console.log(req.ip);
})
//192.168.228.15:5000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
