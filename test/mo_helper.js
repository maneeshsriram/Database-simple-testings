const mongoose = require('mongoose')
mongoose.Promise = global.Promise // interested in ES6 promises


before(done => {
    mongoose.connect('mongodb://localhost/mongotube', { useNewUrlParser: true, useUnifiedTopology: true })
    mongoose.connection
        .once('open', () => {
            console.log("Connected");
            done()
        })
        .on('error', (err) => {
            console.log("Error : ", err);
        })
})

beforeEach(done => {
    mongoose.connection.collections.students.drop(() => {
        console.log("Drop successful");
        done()
    })
})