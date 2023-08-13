const express = require('express')
const path = require('path')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 8080
const DB_URL = process.env.MONGODB_URL

const router = require('./routes')
const seedAdminUsers = require('./utilities/seeder')

app.use(cors())
app.use(express.json())
app.use('/api/v1/', router)

mongoose.connect(DB_URL)
    .then(async () => {
        await seedAdminUsers()
        console.log('connected to db')
    })
    .catch((e) => console.error(e))

app.get('/', (req, res) => res.json({message: 'Welcome to GEMS api!'}))

//if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
//    app.use(express.static(path.join(__dirname, '../build')))
//    app.get('*', (req, res) => {
//        res.sendFile(path.join(__dirname, '../build'))
//    })
//}

app.listen(PORT, () => { console.log(`Server started on port ${PORT}`) })