const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddressCacheSchema = new Schema({
    _id: {type: String, required: true},//will represent digital address
    streetName: {type: String, required: true},
    region: {type: String, required: true},
    district: {type: String, required: true},
    postCode: {type: String, required: true},
    lngLat: {type: String, required: true}

}, {collection: "digital-address-cache", timestamps: true});

AddressCacheSchema.set('toJSON', {virtuals: true});
AddressCacheSchema.set('toObject', {virtuals: true});


const AddressCache = mongoose.model('AddressCache', AddressCacheSchema);

module.exports = AddressCache;
