const express = require("express");
const cookieParser = require("cookie-parser");
const auth = require("./modules/auth");
const login = require("./modules/login");
const tingo = require("tingodb")().Db;
const render = require("./modules/render-html");

//db config
const db = new tingo("./databas",{});
const food = db.collection("food");


const app = express();
//Kommer på provet!!!! vad gör följande rad?
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());


app.get("/",function(req,res){
    food.find().toArray(function(err,items){


        let html = items.map(function(item){

            return `
            <div class="food">
                <h2>${item.title}</h2>
                <p>${item.instructions} </p>
                <a href = "/food/delete/${item._id}">delete</a>
            </div>
            `;
        }); 
        res.send(render("Home page",html));
        
        
        
        });
});

app.get("/secret",auth,function(req,res){
    res.redirect("/?logged in");
});



app.get("/login",function(req,res){
    res.send(require("./modules/form"));
});

app.post("/login",login,function(req,res){


    
    let token  = req.token;
    res.cookie("token",token,{httpOnly:true,sameSite:"Strict"});
    res.redirect("/secret")


});

app.get("/food" ,function(req,res){
    res.send("All food is here soon");
});

app.post("/saveFood",auth, function(req,res){
    res.send("Here we will create one food");
});
app.get("/createFood",auth, function(req,res){
    res.send("Here we will create one food");
});


// kollar om systemet har en angiven port, annars 3700...
const port = process.env.PORT || 3600
app.listen(port, function(){console.log("port:" +port)});