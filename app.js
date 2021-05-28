import express from 'express';
import cors from 'cors';
const app = express();

app.use(express.json())
app.use(cors());

app.post("/", (req, res) => {
  const data = req.body

  console.log(data);
  res.send('ok')
})

app.listen(80, () => {
  console.log("running on port 80");
})