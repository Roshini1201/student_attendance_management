let express = require("express");
let router = express.Router();

router.post('/register', (req,res) => {
    res.send('Staff register Page called')
});

router.post('/login', (req,res) => {
    res.send('Staff login Page called')
});

router.put('/updateProfile', (req,res) => {
    res.send('Staff updateProfile called')
});

router.post('/allocateStudents', (req,res) => {
    res.send('Staff allocateStudents page called')
});

router.get('/viewAttendance', (req,res) => {
    res.send('Staff viewAttendance page called')
});

router.get('/viewReport', (req,res) => {
    res.send('Staff viewReport page called')
});

module.exports = router;