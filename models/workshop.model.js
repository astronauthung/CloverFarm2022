const {model} = require('mongoose')

const Workshop = model('Workshop', {
    workshop_name: {
        type: String,
    },
    workshop_detail: {
        type: String,
    },
    workshop_date: {
        type: String,
    },
    workshop_time: {
        type: String,
    }
})
module.exports = Workshop