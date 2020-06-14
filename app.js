require("dotenv").config();
const app = require("express")();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/dg_address_cache',
    {useNewUrlParser: true}).then(() => {
    console.log("Connected to DB")
}).catch(err => {
    console.error(err);
    process.exit(0);
});



app.get("/api/digitalAddress", async (req, res)=> {

});


app.listen(process.env.PORT, ()=> console.log(`App listening on port ${process.env.PORT}`))

