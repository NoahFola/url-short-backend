const  express = require("express");
const cors = require('cors');
const url = require("./routes/url")


const app = express()

app.use((req, res, next) => {
  req.url = `/url${req.url}`;
  next();
 })


app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  console.log(`Request received`);
  next();
});



app.use("/url",  url)

module.exports = app;


