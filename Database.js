const express = require('express')
const bodyParser = require('body-parser')
const pg = require("pg");
const app = express()

const pool = new pg.Pool({
  user: "testUser",
  host: "127.0.0.1",
  database: "opencampus-web-database",
  password: "hogehoge",
  port: 5432,
});

let count = 0;
let lastName,firstName,lastNameKana,firstNameKana,postCode,address,email1;
let email2,inquiryType,mailTitle,message;

let doqument_request = {
  text: "INSERT INTO \"doqument-request\" VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
  values: [count, lastName, firstName, lastNameKana, firstNameKana, postCode, address,email1],
};

const doqument_request_count = "SELECT count(*) from \"doqument-request\"";

const doqument_request_select = "SELECT * from \"doqument-request\"";

const inquiry_count = "SELECT count(*) from \"inquiry\"";

const inquiry_select = "SELECT * from \"inquiry\"";

let inquiry = {
  text: "INSERT INTO inquiry VALUES ($1, $2, $3, $4, $5)",
  values: [count, email2, inquiryType, mailTitle, message],
};


app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('public'))

app.post('/doqument-request', (req, res) => {
  console.log(req.body)

  lastName = req.body.last_name;
  firstName = req.body.first_name;
  lastNameKana = req.body.last_name_kana;
  firstNameKana = req.body.first_name_kana;
  postCode = req.body.post_code1 + "-" + req.body.post_code2;
  address = req.body.address1 + " " + req.body.address2;
  email1 = req.body.email;
  
  pool.connect( async (err, client) => { //接続
 
    if (err) {
      console.log(err);
      return; 
    }
    try {
      let result = await client.query(doqument_request_count);
      count = result.rows[0].count + 1;

      doqument_request = {
        text: "INSERT INTO \"doqument-request\" VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
        values: [count, lastName, firstName, lastNameKana, firstNameKana, postCode, address,email1],
      };
      console.log(doqument_request);

      result = await client.query(doqument_request);
      console.log(result);
    }
    catch (err) {
      console.log(err.stack);
    }  
    client.release(true); 
  });
  res.redirect('/main.html');
})

app.post('/inquiry', (req, res) => {
  console.log(req.body)

  email2 = req.body.email;
  inquiryType = req.body.inquiry_type;
  mailTitle = req.body.mail_title;
  message = req.body.message;

  pool.connect( async (err, client) => { //接続
 
    if (err) {
      console.log(err);
      return; 
    }
    try {
      let result = await client.query(inquiry_count);
      count = result.rows[0].count + 1;

      inquiry = {
        text: "INSERT INTO inquiry VALUES ($1, $2, $3, $4, $5)",
        values: [count, email2, inquiryType, mailTitle, message],
      };
      console.log(inquiry);

      result = await client.query(inquiry);
      console.log(result);
    }
    catch (err) {
      console.log(err.stack);
    }  
    client.release(true); 
  });

  res.redirect('/main.html');
})


app.listen(8080, () => console.log('Listening on http://localhost:8080/...'))