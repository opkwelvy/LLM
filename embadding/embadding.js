const {OllamaEmbeddings} = require("@langchain/ollama")
const {RedisVectorStore} = require("@langchain/redis")
const {loadDocs} = require("./chuncks")
const {client} = require("../client/clientRedis")

const embeddings = new OllamaEmbeddings({
    model: process.env.OLLAMA_MODEL,
    baseUrl: process.env.OLLAMA_BASE_URL
})

const test = async () =>{
    try{
        const docs = await loadDocs()
        const vectorStore = await RedisVectorStore.fromDocuments(docs, embeddings, {
            redisClient: client,
            indexName: "docs"
        })
        const chunksSearch = await vectorStore.similaritySearch('4 batatas grandes', 4)
        console.log(chunksSearch)
        return chunksSearch
    } catch (e){
        console.error(e)
        throw e
    }
}
const chunksSearch = test()

module.exports = {chunksSearch}