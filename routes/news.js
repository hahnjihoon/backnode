const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const cors = require("cors");
const db = require("../modules/field_keywords_module");

router.use(bodyParser.json());
router.use(cors());

router.get('/', async (req, res) => {
    try {
      // 여기서 실제로 DB에서 데이터를 가져오는 쿼리를 실행합니다.
      const queryResult = await db.query('SELECT * FROM news_bases'); // 실제 테이블명으로 변경해야 합니다.
  
      // 쿼리 결과를 클라이언트에게 응답
      res.json(queryResult);
    } catch (error) {
      console.error('Error executing SELECT query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  module.exports = router;