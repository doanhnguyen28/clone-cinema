require("dotenv").config()
const express = require("express")
const configViewEngine = require("./config/viewEngine")
const routes = require("./routes/web")
const api = require("./routes/api")

const app = express()

configViewEngine(app)

const port = process.env.PORT
const host = process.env.HOST_NAME

app.use("/", routes)
app.use("/api/ver1/", api)

app.listen(port, host, () => {
    console.log(`http://${host}:${port}`)
})