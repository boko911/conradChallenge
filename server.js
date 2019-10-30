const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json({ extended: false}))
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Methods', ['PATCH', 'POST', 'GET', 'DELETE', 'PUT']);
    res.setHeader('Access-Control-Allow-Headers', ['Content-Type']);
    res.setHeader('Access-Control-Expose-Headers', ['Content-Type']);
    next();
  });

//Defines routes

app.use('/api/search', require('./routes/api/search.endpoints'))
app.use('/api/bookmark', require('./routes/api/bookmark.endpoints'))

app.listen(port, () => {
    console.log('Server is running on Port : ' + port);
})