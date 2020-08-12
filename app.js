const express = require('express')
const path = require('path')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    console.log('HI')
})


app.use('/api/users', require('./routes/userRoutes'))

// SERVE statuc assets in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}


module.exports = app