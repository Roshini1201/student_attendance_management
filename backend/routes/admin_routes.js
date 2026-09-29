let express = require("express");
let router = express.Router();

// router.post('/register', (req,res) => {
//     res.send('Admin register Page called')
// });

// router.post('/login', (req,res) => {
//     res.send('Admin login Page called')
// });

router.get('/viewStaff', (req,res) => {
    res.send('Admin viewStaff called')
});

router.get('/viewStudents', (req,res) => {
    res.send('Admin viewStudents page called')
});

router.put('/freezeStaff', (req,res) => {
    res.send('Admin freezeStaff page called')
});

router.put('/freezeStudents', (req,res) => {
    res.send('Admin freezeStudents page called')
});

router.delete('/deleteStaff', (req,res) => {
    res.send('Admin deleteStaff page called')
});

router.get('/viewReport', (req,res) => {
    res.send('Admin viewReport page called')
});

module.exports = router;