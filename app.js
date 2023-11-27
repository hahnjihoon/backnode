const express = require('express');
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");

const field_keywords_Router = require("./routes/field_keywords.js");
const news_Router = require("./routes/news.js")
const google = require("./routes/google_keywords.js")
const db = require('./modules/field_keywords_module.js');

app.use(bodyParser.json());
app.use(cors());

// 라우터등록
app.use("/fieldkeywords", field_keywords_Router);
app.use("/news", news_Router);
app.use("/google", news_Router);


// 루트경로 응답
app.get('/', (req, res) => {
  res.send('Hello, World!22');
});


// // DB 연결 설정
// db.connect((err) => {
//     if (err) {
//       console.error('Error connecting to database:', err);
//     } else {
//       console.log('Connected to database');
//     }
//   });

app.use("/fieldkeywords", field_keywords_Router);
app.use("/news", news_Router);
app.use("/news", news_Router);

// db 객체가 Sequelize 인스턴스인 경우
// db.authenticate()
//   .then(() => {
//     console.log('Connected to database');
//   })
//   .catch((err) => {
//     console.error('Error connecting to database:', err);
//   });


const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});