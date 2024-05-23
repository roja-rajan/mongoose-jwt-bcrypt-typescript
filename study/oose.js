const mongoose = require('mongoose');

// Connect to the MongoDB database
// mongoose.connect('mongodb://localhost:27017/mydb').then(()=>{
//   console.log("created connection");
// } 
// ).catch((err)=>{
//   console.log(err);
// })
var userSchema=new mongoose.Schema(
  {name:{type:String,required:true},
    age:{type:Number,min:19,max:45},
    sal:Number,
    bestFriend:mongoose.Schema.Types.ObjectName
  }
)
var User=new mongoose.model("Users",userSchema);

  async function connect(){
    try{
    await mongoose.connect('mongodb://localhost:27017/mydb');
    console.log("created connection");
  } catch(err){
    console.log(err);
  }
}

connect();


