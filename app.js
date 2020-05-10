// var setKey = Environment.SetEnvironmentVariable("SENDGRID_API_KEY", "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");
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

/*Metodos*/
const index = require('./index');

const app = express();

app.use(bodyParser.json());
app.use(cors())
app.post('/formulario', (req, res) => {
    index.sendEmail(req.body);
    res.status(200).send(true);
})
app.listen(3000, () => {
    console.log('Servidor corriendo')
}); 