const  express = require("express");
const cors = require('cors');
const dotenv = require("dotenv")
dotenv.config();
const url = require("./routes/url.js")
const port = process.env.PORT


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




app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})