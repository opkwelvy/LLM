const {createClient} = require("redis");

const client = createClient({
    url: process.env.CLIENT_URL
})

const clientConfig = {
    redisClient: client,
    indexName: "docs"
}

const connectClient = async () =>{
    await client.connect();
    try{
        console.log("conection successfuly")
    }catch (e){
        console.error(e)
    }
}

connectClient()
console.log(client)
module.exports = {client, clientConfig}