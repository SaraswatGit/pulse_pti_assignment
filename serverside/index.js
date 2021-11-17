const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "agentmanagementsystem",
});

app.post("/addagent", (req, res) => {
  const parentagentid = req.body.parentagentid;
  const username = req.body.username;
  const password = req.body.password;
  const subagentname = req.body.subagentname;
  const contactnum = req.body.contactnum;
  const monthlyptt = req.body.monthlyptt;
  const quarterlyptt = req.body.quarterlyptt;
  const halfylyptt = req.body.halfylyptt;
  const yearlyptt = req.body.yearlyptt;
  const onetimeptt = req.body.onetimeptt;
  const monthlydap = req.body.monthlydap;
  const quarterlydap = req.body.quarterlydap;
  const halfylydap = req.body.halfylydap;
  const yearlydap = req.body.earlydap;
  const onetimedap = req.body.onetimedap;
  const monthlycsap = req.body.monthlycsap;
  const quarterlycsap = req.body.quarterlycsap;
  const halfylycsap = req.body.halfylycsap;
  const yearlycsap = req.body.yearlycsap;
  const onetimecsap = req.body.onetimecsap;
  db.query(
    "INSERT INTO agentdatabase (parentagentid,username, password, subagentname, contactnum, monthlyppt,quarterlyppt,halflyppt,yearlyppt,onetimeppt,monthlydap,quarterlydap,halflydap,yearlydap,onetimedap,monthlycsap,quarterlycsap,halflycsap,yearlycsap,onetimecsap) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,)",
    [
      parentagentid,
      username,
      password,
      subagentname,
      contactnum,
      monthlyppt,
      quarterlyppt,
      halflyppt,
      yearlyppt,
      onetimeppt,
      monthlydap,
      quarterlydap,
      halflydap,
      yearlydap,
      onetimedap,
      monthlycsap,
      quarterlycsap,
      halflycsap,
      yearlycsap,
      onetimecsap,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});
app.listen(3001, () => {
  console.log("Server is up and running");
});
