const connectToLocalDb = require("./mongodb/connectToMongedbLocally");
const connectToAtlaslDb = require("./mongodb/connectToAtlas");

const config = require("config");
const ENVIRONMENT = config.get("ENVIRONMENT");

const connectToDb = async () => {
    console.log(ENVIRONMENT);
    
    if (ENVIRONMENT === "development") {
        await connectToLocalDb();
    }
    if (ENVIRONMENT === "production") {
        await connectToAtlaslDb();
    }
};

module.exports = connectToDb;