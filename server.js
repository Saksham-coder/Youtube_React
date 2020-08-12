const mongoose = require('mongoose')
const app = require('./app')


const DB = "mongodb+srv://saksham:tKrD00kw7OlSfxrl@cluster0.mamly.mongodb.net/firstData?retryWrites=true&w=majority"

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then((con) => {
        // console.log(con.connections);
        console.log('DATABSE connected successfully');
    });

// tKrD00kw7OlSfxrl

PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})