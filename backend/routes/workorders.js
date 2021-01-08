const db = require('../config/connection.js');
const router = require('express').Router();

// router.get('/test', (req, res) => {
//     res.send('testing workorders');
// });

router.get('/', (req, res) => {
    const sql = 'SELECT * FROM v_workorder';
    db.query(sql, (err, rows) => {
        if (err) {
            throw err;
        }
        // console.log(rows);
        res.send(rows);
    });
});

module.exports = router;