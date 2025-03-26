const {AzureChatOpenAI} = require ("@langchain/openai")


const gpt4o = new AzureChatOpenAI({
    model: "gpt-4o",
    azureOpenAIApiKey: process.env.AZURE_OPENAI_API_KEY,
    azureOpenAIApiDeploymentName: process.env.AZURE_OPENAI_API_DEPLOYMENT_NAME,
    azureOpenAIApiInstanceName: process.env.AZURE_OPENAI_API_INSTANCE_NAME,
    azureOpenAIApiVersion: AZURE_OPENAI_API_VERSION,
    temperature: 0
})

module.exports = {gpt4o}