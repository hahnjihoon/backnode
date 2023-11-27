// your_db_module.js

const mysql = require('mysql');
// const { Sequelize, DataTypes } = require('sequelize');

// 실제 DB 연결 정보
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'rainbow_db_newsdashboard',
};

// DB 연결 풀 생성
const pool = mysql.createPool(dbConfig);

// Sequelize 인스턴스 생성
// const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
//     host: dbConfig.host,
//     dialect: 'mysql',
//   });


  // 모델 정의
// const FieldKeywords = sequelize.define('FieldKeywords', {
//     id: {
//         type: DataTypes.
//     }
//     keyword: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     division: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     // 나머지 필드들도 정의

//   });

// module.exports = { sequelize, FieldKeywords };


// 쿼리 실행 함수
const query = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.query(sql, values, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports = { query };