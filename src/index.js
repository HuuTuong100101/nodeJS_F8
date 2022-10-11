const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handlebars= require('express-handlebars');
const app = express();
const port = 3000;
const route = require('./routes/index');
const db = require('./config/db')

//connect db
db.connect();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use(express.static(path.join(__dirname,'public')));
//HTTP Logger
app.use(morgan('combined'));

//Template engine
const hbs = handlebars.create({ 
    defaultLayout:'main',
    extname: '.hbs'
});
app.engine('hbs', hbs.engine)
app.set('view engine','hbs');
app.set('views',path.join(__dirname,'resource/views'))

route(app);

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));