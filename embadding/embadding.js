const {AzureOpenAIEmbeddings} = require("@langchain/openai")
const {RedisVectorStore} = require ("@langchain/redis")
const {docs} = require("./chuncks")
const {client, clientConfig} = require("../client/clientRedis")
const { VectorStore } = require("@langchain/core/vectorstores")

const embeddings = new AzureOpenAIEmbeddings({
    azureOpenAIApiKey: process.env.AZURE_OPENAI_API_KEY,
    azureOpenAIApiDeploymentName: process.env.AZURE_OPENAI_API_DEPLOYMENT_NAME,
    azureOpenAIApiInstanceName: process.env.AZURE_OPENAI_API_INSTANCE_NAME,
    azureOpenAIApiVersion: AZURE_OPENAI_API_VERSION,
})

const vectorStore = await RedisVectorStore.fromDocuments(docs, embeddings, clientConfig)

const chunksSearch = await vectorStore.similaritySearch('4 batatas grandes', 4)

module.exports = {chunksSearch}