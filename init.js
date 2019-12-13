const tingo = require("tingodb")().Db;

//db config
const db = new tingo("./databas",{});
const food = db.collection("food");


/* food.insert({title:"korv",instructions:"köp STOR"},function(err,item){
console.log(err,item)
}); */


food.find().toArray(function(err,items){
console.log(items);



});


food.findOne({_id:5},function(err,item){
    console.log(item);
});

/* food.remove({_id:5},function(err,item){
    console.log(item);
    }); */


