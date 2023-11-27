const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
// const port = 3000;

app.use(cors());

app.get('/google', async (req, res) => {
  try {
    const response = await axios.get('https://trends.google.co.kr/trends/trendingsearches/daily/rss?geo=KR');
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });