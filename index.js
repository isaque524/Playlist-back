// backend/index.js
require('dotenv').config();
const express = require('express');
const connectToDb = require('./database/db');
const path = require('path');

// Assuming your main router file is in the 'routes' folder
const mainRouter = require('./routes/route');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded());

connectToDb();

// Use the main router
app.use('/', mainRouter);

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));

