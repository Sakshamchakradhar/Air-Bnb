require('dotenv').config({ path : "../.env"}); 

const mongoose = require('mongoose');
const initData = require('./data.js');
const Listing = require('../models/listing.js');

const dbUrl = process.env.ATLASDB_URL;

main()
    .then(() => {console.log("Connected to server")})
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect(dbUrl);
}


const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: "6731097645cb94761fda9599"}));
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
}

initDB();