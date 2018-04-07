// import the component's model
const Car=require('./model');

// expose a set of operations 
module.exports = {

 insert : (req,res)=>{
    // create a new instance of the model
    const car = new Car({
         model:'2000',
         name:'Mehran',
         color:'purple'
     });

     // call save funtion on that model's instance
     car.save((err)=>{
         if(err){
             // return error
             res.status(500).json({message :"something went wrong"});
         }else{
             // return success
             res.status(200).json({message:"car added successfully"});
         }
         
     });
 }
}