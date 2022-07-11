const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const express = require("express");
const router = express.Router();
const form = require("./routes/contactform.routes");
const jobform = require("./routes/jobform.routes");
dotenv.config();

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use("/resumes", express.static("resumes"));


async function db() {
  try {
    mongoose.connect(
      process.env.MONGODB_DB,

      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("successs");
  } catch (e) {
    console.log(e);
  }
}


app.use("/contactform", form);
app.use("/jobform", jobform);



app.get("/health", (req, res) => {
  res.send("ok");
 
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server starting at port number ${PORT}`);
});

db();

module.exports = router;
