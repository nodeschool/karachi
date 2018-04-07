// import all component's router
var carRouter =require('./car/route');

/* expose a function that will take express object ( app ) as parameter and add all component's
* router middlewares to the app object
*/
module.exports = (app)=>{
    
    app.use('/car',carRouter);
};