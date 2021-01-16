const db = require('../config/connection.js');
const router = require('express').Router();

// router.get('/test', (req, res) => {
//     res.send('testing customers');
// });

router.get('/', (req, res) => {
    const sql = 'SELECT * FROM v_customers';
    db.query(sql, (err, rows) => {
        if (err) {
            throw err;
        }
        // console.log(rows);
        res.send(rows);
    });
});

router.post('/new-customer', (req, res) => {
    const sql = 'call newCustomer(@cust_id,?,?,?,?,?,?,?,?); select concat(\'cust \', @cust_id,\' added successfully\') as new_cust;';
    console.log(req.body);
    db.query(sql, [req.body.p_first_name, req.body.p_last_name, req.body.p_email, req.body.p_address, req.body.p_city, req.body.p_state, req.body.p_zip, req.body.p_phone]
        , (err, rows) => {
            if (err) {
                console.error(err.message);
                return res.status(500).send(err);
            }
            console.log(rows);
            res.send(rows);
        });
});

module.exports = router;