const mongoose = require('mongoose')

const connectToDB = async ()=>{
    try {
        if(mongoose.connection.readyState === 0){
            await mongoose.connect(process.env.MONGO_URI)
            console.log('connected to db')
        }

    } catch (error) {
        console.log('its not sorry',error)
    }
}


export default connectToDB;