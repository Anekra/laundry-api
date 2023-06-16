require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const corsOption = { origin: 'http://localhost:3001' };

app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the server' });
});

const PORT = precess.env.PORT || 4000

app.listen(PORT, () => {
  console.log('Server running on port: %d', PORT)
})