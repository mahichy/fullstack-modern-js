const express = require (`express`);
const app = express();
const bodyParser = require(`body-parser`);




app.use(bodyParser.json());


app.get("/",(req,res)=>{
    res.end("hello world part 2");
})

app.post("/me",(req,res)=>{
    let myAns = {
        time:Date.now(),
         greeting: `hello ${req.body.name}!have a good day`
    }
    res.json(myAns);
})

app.listen(4000)


