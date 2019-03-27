/*
/login
>email
>password
/signup
>name
>email
>password
/add_url{url}=>{shortened}
/my_urls{data:[]}
/WebAuthentication
*/
const express = require (`express`);
const bp      = require (`body-parser`);

const app     = express();

const _port = process.env.PORT || 4000
app.listen(_port,()=>{
    console.log(`application listening on port : ${_port}`)
});