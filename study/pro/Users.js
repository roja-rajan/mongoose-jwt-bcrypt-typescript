const mongoose = require('mongoose');
var userSchema=new mongoose.Schema(
    {
        name:{type:String,required:true},
        age:{type:Number,min:19,max:45},
        sal:Number,
        //bestFriend:{type:mongoose.Schema.Types.ObjectId,ref:'Users'}
      
    }
)
module.exports=new mongoose.model("Users",userSchema)