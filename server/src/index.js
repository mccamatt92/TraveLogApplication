const express = require('express');
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();
const middleWares = require('./middlewares');
const logs = require('./api/logs');

const app = express();

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(morgan('common'));
app.use(helmet());
app.use(cors({
    origin: process.env.CORS_ORIGN,
}))

app.get("/", (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

app.use('/api/logs',logs);

app.use(middleWares.notFound);
app.use(middleWares.errorHandle);

const port = process.env.port || 1337;


app.listen(port, () => {
    console.log(`Listening at port ${port}`)
})