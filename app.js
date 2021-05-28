import express from 'express';
import cors from 'cors';
const app = express();
const PORT = process.env.PORT || 5000
app.use(express.json())
app.use(cors());

app.post("/", (req, res) => {
  const data = req.body

  console.log(data);
  res.send('ok')
})

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
})