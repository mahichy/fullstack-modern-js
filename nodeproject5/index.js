const express = require (`express`);
const app = express();

/*const bodyParser = require(`body-parser`);
const path = require (`path`);*/
const routes = require (`./routes`);
const fixedToken = "abc123"
//app.get("/",())
//<link rel ="stylesheet" href ="/pub/filename" 
app.use("/pub",express.static("public"));
//app.get("/pub/style.css",(req,res)=>{
//    res.sendFile(path.resolve(__dirname,"./public/style.css"));
//})
//app.use("/api"middleWare)

app.use("/api",function(req,res,next){
    let token = req.header(`token`);
   if (!token){
        return res.json({
            message: "user not authorized"
        }).status (401);
    }else{
        if (token ===fixedToken){
           return next();
        }
        else{
            return res.json({
                message: "wrong token provided"
            }).status (401);
        }
    }

});
app.get("/api/hello",(req,res)=>{
    res.json({
        message:"hello world"
    })
})




routes(app);
app.listen(4000)


