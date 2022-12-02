const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const bodyParser =  require('body-parser');

const route = require('./routes')



const db = require('./config/database');
// Connect to Database
db.connect();



app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(bodyParser.json());
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));

//route INIT
route(app);
app.listen(port, () => {
    console.log(` app listening on port ${port}`);
});
