const express = require('express');
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors');


const middleWares = require('./middlewares')


const app = express();
app.use(morgan('common'));
app.use(helmet());
app.use(cors({
    origin: 'http://localhost:3000',
}))



app.get("/", (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

app.use(middleWares.notFound);
app.use(middleWares.errorHandle);

const port = process.env.port || 1337;


app.listen(port, () => {
    console.log(`Listening at port ${port}`)
})