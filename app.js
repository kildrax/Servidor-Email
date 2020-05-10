// var setKey = Environment.SetEnvironmentVariable("SENDGRID_API_KEY", "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");
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

/*Metodos*/
const index = require('./index');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
app.use(bodyParser.json());
app.use(cors())
app.post('/formulario', (req, res) => {
    index.sendEmail(req.body);
    res.status(200).send(true);
})

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

// app.get('*', (request, response) => {
//     response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));