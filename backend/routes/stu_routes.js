let express = require("express");
let router = express.Router();

router.post('/register', (req,res) => {
    res.send('Stu register Page called')
});

router.post('/login', (req,res) => {
    res.send('Stu login Page called')
});

router.put('/updateProfile', (req,res) => {
    res.send('Stu updateProfile called')
});

router.get('/viewClassAllocation', (req,res) => {
    res.send('Stu veiwClassAllocation page called')
});

router.get('/viewAttendance', (req,res) => {
    res.send('Stu viewAttendance page called')
});

router.put('/updateAttendance', (req,res) => {
    res.send('Stu updateAttendance page called')
});

module.exports = router;