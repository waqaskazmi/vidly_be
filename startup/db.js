const winston = require('winston');
const mongoose= require('mongoose');
module.exports = function (){
    //mongoose.connect('mongodb://127.0.0.1/vidly')
    mongoose.connect('mongodb+srv://waqaskazmi2006:$ensation5@cluster0.kgbdso7.mongodb.net/?retryWrites=true&w=majority')
    
.then(() => winston.info("connected to mongodb database vidly") );
}