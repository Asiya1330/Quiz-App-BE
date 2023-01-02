const express = require('express')
const app = express();
const dotenv = require('dotenv');
const basicRoutes = require('./routes/basicRoutes');
var cors = require('cors')
app.use(cors()) // Use this after the variable declaration

app.use(express.json())
app.use('/api', basicRoutes);
dotenv.config();

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL).then(() => console.log('connected')).catch((err) => console.log(err));

app.listen(process.env.PORT, () => {
    console.log(`listening to ${process.env.PORT}`);
})