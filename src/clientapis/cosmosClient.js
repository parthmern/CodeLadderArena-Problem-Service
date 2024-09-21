const {CosmosClient} = require("@azure/cosmos");

const endpoint = "https://codeladderarena.documents.azure.com:443/";
const key = "22Klt720cNGRasThsdF3B37ac3QmAAeaLb24XYRQDbGUhP4rSc65mKog9KzZkCQ6qLCZxGlAdRQ7ACDb5qPnFg==";
const dbId = "CodeLadderArena-Logger-Service";
const containerId = "error-logs";

const client = new CosmosClient({ endpoint, key });
const database = client.database(dbId);
const container = database.container(containerId);

async function logToCosmosDB(level,message) {
    try{
        await container.items.create({
            timeStamp : new Date().toISOString(),
            level : level,
            message : message
        });

        console.log("log entry created in cosmosDB");
    }
    catch(error){
        console.log("error in logging to cosmos db");
    }
}

module.exports={
    logToCosmosDB
}