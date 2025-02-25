const dotenv = require("dotenv")
dotenv.config();
const port = process.env.PORT
const app = require("./Backend/server")
const {dbSync} = require("./Backend/models/url")

app.listen(process.env.PORT, () => {
    dbSync();
    console.log(`Example app listening on port ${port}`)
})