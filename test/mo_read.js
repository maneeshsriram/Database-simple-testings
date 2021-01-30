const Student = require('../app/student')
const assert = require('assert')


describe('Read records', () => {
    let reader;

    beforeEach((done) => {
        reader = new Student({ name: "Reader" })
        reader.save()
            .then(() => {
                done()
            })
    })

    it('read user in DB', (done) => {
        Student.find({ name: "Reader" })
            .then((students) => {
                assert(reader._id.toString() === students[0]._id.toString())
                done()
            })
    })
})