module.exports = function(app){
    app.get("/",(req,res)=>{
        res.end("hello world this is mahi i am coming to win this");
    })
    app.post("/me",(req,res)=>{
        let myAns = {
            time:Date.now(),
             greeting: `hello ${req.body.name}!have a good day`
        }
        res.json(myAns);
    })
    
}