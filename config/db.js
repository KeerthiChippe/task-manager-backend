const mongoose = require('mongoose')

const configureDB = async ()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/task-manager-app')
        console.log('successfully connected to db')
    }catch(e){
        console.log(e, 'error connecting to db')
    }
}

module.exports = configureDB