// middleware module
module.exports = function(req,res, next){

    const date = new Date();

    require("fs").
    appendFile("log.txt",JSON.stringify(req.body)+"\t"+date+"\n",function(err){
        if(err) console.log(err.message);
        next();
    });


}