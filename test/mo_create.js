const Student = require('../app/student')
const assert = require('assert')

describe('Create records', () => {
    it('create user in DB', () => {
        const sam = new Student({ name: "Sam" })
        sam.save()
            .then(() => {
                assert(!sam.isNew)
            })
            .catch(() => {
                console.log("Error");
            })
    })
})

