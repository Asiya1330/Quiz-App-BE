const express = require('express')
const app = express();
const dotenv = require('dotenv');
const basicRoutes = require('./routes/basicRoutes');
const authRoute = require('./routes/auth');
const bodyParser = require('body-parser')
const baseControler = require('./baseController/controller');
const path = require('path')
const fs = require('fs');
const multer = require('multer');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'assets/audios/')
    },
    filename: function (req, file, cb) {
        cb(null, `${file.originalname}.mp3`)
    }
});

const upload = multer({ storage: storage });


app.use("/audios", express.static(path.join(__dirname, "/assets/audios")));

var cors = require('cors')
app.use(cors()) // Use this after the variable declaration
app.use(bodyParser.json())


app.use(express.json())
app.post('/api/uploadAudio', upload.single('audio'), (req, res) => {
    console.log('File uploaded to', req.file.path);
    res.send(req.file);
});
app.use('/api/', basicRoutes);
app.use('/api/auth/', authRoute);


dotenv.config();

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL).then(() => console.log('connected')).catch((err) => console.log(err));

app.listen(process.env.PORT, () => {
    console.log(`listening to ${process.env.PORT}`);
})

