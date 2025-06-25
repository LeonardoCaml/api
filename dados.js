const express = require('express');
const app = express();
const port = 3000;
const userRoutes = require('./src/routes/userRoutes')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use('/', userRoutes)

app.listen(port, () => {
    console.log("rodando")
})