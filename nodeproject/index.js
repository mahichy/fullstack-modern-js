const express = require (`express`);
const app = express();

app.get("/",(req,res)=>{
    res.end("hello everyone how is going on");

})

app.listen(4000);

// yarn init
//yarn add express
//copy con index.js
//code . vs open from cmd