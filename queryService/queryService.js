const { dataEmbedding } = require("../embadding/embadding");
const { gpt4o } = require("../agent/agent");
const { createRetrievalChain } = require("langchain/chains/retrieval");
const {
  createStuffDocumentsChain,
} = require("langchain/chains/combine_documents");
const { PromptTemplate } = require("@langchain/core/prompts");

const query = async () => {
  try {
    const vectorStore = await dataEmbedding();
    const retriever = vectorStore.asRetriever();

    const prompt = PromptTemplate.fromTemplate(`
            You are an LLM with one goal: to help the user answer questions about the following topic:
         {context}
         
Now, answer the following question: {input}`);

    const documentChain = await createStuffDocumentsChain({
      llm: gpt4o,
      prompt,
    });

    const retrievalChain = await createRetrievalChain({
      combineDocsChain: documentChain,
      retriever,
    });

    const res = await retrievalChain.invoke({
      input: "Quais são os ingredientes para fazer frango com laranja?",
    });
    console.log(res.answer)
    return res;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

module.exports = { query };
