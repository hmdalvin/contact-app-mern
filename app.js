const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const { body, validationResult, check } = require('express-validator');
const methodOverride = require('method-override');

const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

// require ('./utils/db')
// const Contact = require('./model/contact')

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

// setup method override
app.use(methodOverride('_method'));

// third part middleware
app.use(expressLayouts);

// Built-in middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// configuration flash
app.use(cookieParser('secret'));
app.use(
    session({
        cookie: { maxAge: 6000 },
        secret: 'secret',
        resave: true,
        saveUninitialized: true,
    })
);

app.use(flash());

// Home Page
app.get('/', (req, res) => {
    const usersContact = [
        {
            nameContact: 'Alfin',
            email: 'alfin@gmail.com'
        },
        {
            nameContact: 'erik',
            email: 'erik@gmail.com'
        },
        {
            nameContact: 'dody',
            email: 'dody@gmail.com'
        },
    ];
    res.render('index', {
        nameUser: 'George Frank',
        title: 'Halaman Home',
        usersContact,
        layout: 'layouts/main-layout',
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        layout: 'layouts/main-layout',
        title: 'Halaman About',
    });
});

app.listen(port, () => {
    console.log(`Contact App | listening app http://localhost:${port}`)
});