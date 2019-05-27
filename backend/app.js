const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./db');

const users = require('./routes/user'); 
const search = require('./routes/search'); 

mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);

const app = express();
app.use(passport.initialize());
require('./passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/users', users);
app.use('/api', search);

app.get('/', function(req, res) {
    res.send('hello');
});

// const spawn = require("child_process").spawn;
// const pythonProcess = spawn('python3',["./detectors/google.py"]);
// pythonProcess.stdout.on('data', data => {
//     console.log("testing python program..."+data);
// });


// let runPy = new Promise(function(success, nosuccess) {

//     const { spawn } = require('child_process');
//     const pyprog = spawn('python', ['hello.py']);

//     pyprog.stdout.on('data', function(data) {

//         success(data);
//     });

//     pyprog.stderr.on('data', (data) => {

//         nosuccess(data);
//     });
// });

// app.post('/search', (req, res) => {

//     res.write('welcome\n');

//     runPy.then(function(fromRunpy) {
//         console.log(fromRunpy.toString());
//         res.end(fromRunpy);
//     });
// })


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});