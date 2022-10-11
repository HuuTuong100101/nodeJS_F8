const mongoose = require('mongoose');

async function connect () {
    try {
        await mongoose.connect('mongodb://localhost:27017/courses', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected database !');
    } catch (error) {
        console.log('Failed !!');
    }
};

module.exports = { connect };