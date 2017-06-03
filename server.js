const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require("cookie-parser");
const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve('public/uploads'));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({storage: storage});

const app = express();

app.use(express.static('public'));

app.post('/profile', upload.single('avatar'), (req, res, next)=> {
    res.send({
        err: null,
        filePath: 'uploads/' + path.basename(req.file.path)
    });
});

const addUser=require('./server/routers/insertUser');
const login = require("./server/routers/login");
const logout = require('./server/routers/logout');
const addGoods=require("./server/routers/insertGoods");
const allGoods=require("./server/routers/findAllGoods");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

app.use(cookieParser());
app.use(session({
    secret: 'a',
    resave: true,
    saveUninitialized: true
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

