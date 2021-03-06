const express = require("express");
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());


const db = require("./models");


const regPracticeRouter = require('./routes/Practices')
app.use("/registration", regPracticeRouter);


db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server is running on port 3001");
  });
});
