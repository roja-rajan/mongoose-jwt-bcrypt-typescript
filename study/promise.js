let p=new Promise((resolve,reject)=>{
    let a=1+1;
    if(a==2){
        resolve("success");
    }
    else{
        reject("failed")
    }
})
// p.then((msg)=>{
//     console.log(msg);
// }).catch(msg=>{
//     console.log(msg);
// })
async function connect(){
    try{
        const pro=await p
        console.log(pro);
    }
    catch(err){
        console.log(err);
    }
    
}
connect();