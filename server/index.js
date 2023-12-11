const express = require ("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const dotEnv = require() 

const PORT = process.env.PORT || 6001
mongoose.connect(process.env.MONGO_URL).then(
()=>{
    app.listen(PORT,()=>{console.log(`server connected to the port ${PORT}`)})
}
).catch((e)=>{console.log(`${e} server did not connect`)})

