const express = require('express');
const bodyParser = require('body-parser');
const tasksRoute = require('./routes/tasks');
const db = require('./db/db');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.listen(3000, () => {
	console.log('Server is running on port 3000');
});
