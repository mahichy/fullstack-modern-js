const express = require (`express`);
const app = express();
const bodyParser = require(`body-parser`);
const path = require (`path`);
const routes = require (`./routes`);
//app.get("/",())
//<link rel ="stylesheet" href ="/pub/filename" 
app.use("/pub",express.static("public"));
//app.get("/pub/style.css",(req,res)=>{
//    res.sendFile(path.resolve(__dirname,"./public/style.css"));
//})
//app.use("/api"middleWare)
routes(app);


app.listen(4000)


