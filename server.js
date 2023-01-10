const express =  require('express');
const routes = require('./routes');
const app = express();
const PORT = 4000;
const path = require('path');
const fs = require('fs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname + '/static')));
app.use(routes);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});