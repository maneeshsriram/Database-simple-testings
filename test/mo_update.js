const Student = require('../app/student')
const assert = require('assert')

describe('Delete Tests', () => {
    let updater

    beforeEach((done) => {
        updater = new Student({ name: "Updater" })
        updater.save()
            .then(() => done())
    })

    it('Set n Save test', () => {
        updater.set('name', 'updatedName')
        updater.save()
            .then(() => Student.find({}))
            .then(students => {
                assert(students[0].name === 'Updater')
            })
    })
})