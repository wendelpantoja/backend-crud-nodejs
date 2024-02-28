const express = require('express');
const app = express();

const port = 8080;
const router = require('./routes/routes');
app.use(express.urlencoded({
    extended: true,
}))
app.use(express.json())
app.use(router);

app.get('/', (req, res) => {
    res.send("Olá mundo");
})

app.listen(port, () => console.log("Rodando na porta: " + port));