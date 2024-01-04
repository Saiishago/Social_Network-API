// Importing the mongoose library
const mongoose = require('mongoose');
// Connecting to the MongoDB database using the MongoDB URI provided in the environment 
// variables or using the default URI if the environment variable is not set
mongoose.connect(process.env.MONOGDB_URI || 'mongodb://127.0.0.1:27017/socialNetwork',{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});

module.exports = mongoose.connection
