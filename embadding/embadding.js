const { MemoryVectorStore } = require("langchain/vectorstores/memory");
const { loadDocs } = require("./chuncks");
const {embeddings} = require("../agent/agent")

const dataEmbedding = async (file) => {
  try {

    const docs = await loadDocs(file);
    if (!docs || docs.length === 0) {
      throw new Error("No documents found");
    }
    const contents = docs.map(doc => doc.pageContent)
    const vectorStore = await MemoryVectorStore.fromTexts(contents, {}, embeddings);
    console.log(vectorStore)

    return vectorStore;
  } catch (e) {
    console.error("Error on embedding: ",e);
    throw e;
  }
};

module.exports = { dataEmbedding };
