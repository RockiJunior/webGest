const express = require('express');
const app = express.Router();
const jwt = require('jsonwebtoken');

const clients = require('../routes/clients/clients.js');
const products = require('../routes/products/products.js');


app.use('/clients', clients);
app.use('/products', products);


// app.post('/jwt/singup',  (req, res) => {
//     const user = {
//         id: 1,
//         name: "Juan",
//     }
    
//     jwt.sign({user}, 'secretkey', {expires},  (err, token) => {
//         res.json({
//             token
//         })
//     });
// });



app.post('/jwt/login', verifyToken, (req, res) => {

    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err) {
            res.sendStatus(403);
        } else {
            res.json({
                message: "Post created",
                authData
            })
        }
    })
})




module.exports = app; 