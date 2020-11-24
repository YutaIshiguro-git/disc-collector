/*const {createConnection} = require('typeorm')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const routes = require('./routes.ts')
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(routes)

app.listen(3333)
*/

const { setupExpressServer } = require("./routes");
const server = setupExpressServer();
const PORT = process.env.PORT || 3333;
server.listen(PORT, () => {
  console.log("Server listening on Port", PORT);
});
