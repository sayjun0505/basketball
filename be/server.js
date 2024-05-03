const express = require('express');
const mongoose = require('mongoose');
const dbConfig = require('./db/bascketballdb');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();
const app = express();
// const compression = require("compression")
// app.use(
//     compression({
//         filter: (req, res) => {
//             const contentTypes = [
//                 'text/html',
//                 'text/css',
//                 'text/javascript',
//                 'application/javascript',
//                 'application/json',
//                 'text/plain',
//                 'application/xml',
//             ];
//             const contentType = res.get('Content-Type');
//             return contentType && contentTypes.some((type) => contentType.startsWith(type));
//         },
//     })
// );
// app.use((req, res, next) => {
//     req.headers['accept-encoding'] = 'gzip, deflate, br';
//     next();
// });
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    cors({
        origin: "*", // Replace with the URL of your frontend app
    })
);



mongoose.Promise = global.Promise;

mongoose
    .connect(dbConfig.db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Database successfully connected!');
    })
    .catch((error) => {
        console.log('Could not connect to database: ' + error);
    });

app.use('/auth', require('./routes/auth'));
app.get('/', (req, res) => {
    res.send('<h1>Hello, Express.js Server!</h1>');
});
const port = process.env.PORT || 5000; // You can use environment variables for port configuration
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});