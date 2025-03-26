const {AzureOpenAIEmbeddings} = require("@langchain/openai")
const {PDFLoader} = require("@langchain/community/document_loaders/fs/pdf")
const {RedisVectorStore} = require ("@langchain/vectorstores/redis")

const loader = new PDFLoader("../assets/receitas.pdf")
const doc = await loader.load();

const embeddings = new AzureOpenAIEmbeddings({
    azureOpenAIApiKey: process.env.AZURE_OPENAI_API_KEY,
    azureOpenAIApiDeploymentName: process.env.AZURE_OPENAI_API_DEPLOYMENT_NAME,
    azureOpenAIApiInstanceName: process.env.AZURE_OPENAI_API_INSTANCE_NAME,
    azureOpenAIApiVersion: AZURE_OPENAI_API_VERSION,
})

