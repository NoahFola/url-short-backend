const dotenv = require("dotenv")
dotenv.config();
const port = process.env.PORT
const app = require("./Backend/server")

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})