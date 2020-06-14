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

const GHPostUtil = require("./GhanaPostUtil");



app.get("/api/digital_address/:address", async (req, res)=> {

    let address = req.params.address;
    console.log(req.params.address);
    try{
        let locationData = await GHPostUtil.grabAddressInfo(address, {
            timeout: 20000
        });

        res.send(locationData);
    }
    catch (e) {
        res.send(e);
    }

    //res.send("ack!")
});


app.listen(process.env.PORT, ()=> console.log(`App listening on port ${process.env.PORT}`))

