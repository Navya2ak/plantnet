const mongoose=require('mongoose')

const schema= new mongoose.Schema({
    name: {
        type: String
      },
      phone:{
        type:string
      },
      email:{
        type:string,
        required:false
      }
})

module.exports=model('user',schema)