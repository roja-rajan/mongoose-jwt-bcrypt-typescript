var mongoose=require("mongoose")
var User=require("./Users")
mongoose.connect("mongodb://localhost:27017/meradb").then(()=>{
    console.log("database connected");
   // created();
   findone();
}).catch((err)=>{
console.log("error occuerd"+ err);
})

async function created(){
    try{
    var user1=await User.insertMany([{
        name:"simla",
        age:26,
        sal:18000
    },{name:"bari",age:38,sal:10000},
    {name:"sathya",age:32,sal:10000},
    {name:"chutki",age:19,sal:2000},
    {name:"bheem",age:45,sal:18000}
])
    console.log(user1);
}catch(err){
    console.log(err);
}
}

async function findone(){
    try{
    var user1=await User.aggregate([{$addFields:{'annsal':{$multiply:['$sal',12]}}},{$out:"annual_report"}])
    console.log(user1);
}catch(err){
    console.log(err);
}
}



