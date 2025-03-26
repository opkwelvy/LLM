const {PDFLoader} = require("@langchain/community/document_loaders/fs/pdf")

const loader = new PDFLoader("../assets/receitas.pdf")
const docs = await loader.load();

module.exports = {docs}