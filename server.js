const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require("cookie-parser");

const addUser=require('./server/routers/insertUser');
const login = require("./server/routers/login");
const logout = require('./server/routers/logout');
const addGoods=require("./server/routers/insertGoods");
const allGoods=require("./server/routers/findAllGoods");

const app = new express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

app.use(cookieParser());
app.use(session({
    secret: 'a',
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 10 * 1000
    }
}));

app.use('/',addUser);
app.use('/',login);
app.use('/',logout);
app.use('/',addGoods);
app.use('/', allGoods);

app.get('*', (req, res) => {
    "use strict";
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});



var server = app.listen(3000, () => {
    console.log('listening at port %s', server.address().port);
});

module.exports = server;