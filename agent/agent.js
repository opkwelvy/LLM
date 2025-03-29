const {AzureChatOpenAI} = require ("@langchain/openai")
const { OllamaEmbeddings } = require("@langchain/ollama");


const gpt4o = new AzureChatOpenAI({
    model: "gpt-4o",
    azureOpenAIApiKey: process.env.AZURE_OPENAI_API_KEY,
    azureOpenAIApiDeploymentName: process.env.AZURE_OPENAI_API_DEPLOYMENT_NAME,
    azureOpenAIApiInstanceName: process.env.AZURE_OPENAI_API_INSTANCE_NAME,
    azureOpenAIApiVersion: process.env.AZURE_OPENAI_API_VERSION,
    temperature: 0
})
const embeddings = new OllamaEmbeddings({
    model: process.env.OLLAMA_MODEL,
    baseUrl: process.env.OLLAMA_BASE_URL,
    requestOptions: {
      timeout: 60000,
    },
  });
module.exports = {gpt4o, embeddings}