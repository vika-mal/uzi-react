const express = require('express')
const mongoose = require('mongoose');
const router = require('./routes/routes');
const cors = require('./cors/cors')

const app = express();
const PORT = 3001;

app.use(cors)
app.use(express.json())
app.use('/', router)

const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://Uzi:1234@cluster.rldw0.mongodb.net/Uzi?retryWrites=true&w=majority')

        app.listen(PORT, () => {
            console.log('Server started on ' + PORT);
        })
    } catch (e) {

    }
}

start()