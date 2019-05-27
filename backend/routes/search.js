const express = require('express');
const router = express.Router();


const runPy = arg=>new Promise(function(resolve, reject) {

    const { spawn } = require('child_process');
    const pyprog = spawn('python3', ['./detectors/google.py', arg]);

    pyprog.stdout.on('data', function(data) {
        resolve(data);
    });

    pyprog.stderr.on('data', (data) => {
        reject(Error("It broke"));
    });
});

router.post('/search', function(req, res) {
    // res.write('welcome\n');
    console.log("req....",req.body);
    runPy(req.body).then(function(fromRunpy) {
        // console.log(fromRunpy.toString());
        res.end(fromRunpy);
    })
    .catch(err=>console.log(err));
});

module.exports = router;