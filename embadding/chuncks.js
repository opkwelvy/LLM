const {PDFLoader} = require("@langchain/community/document_loaders/fs/pdf")
const path = require("path")
const loadDocs = async () =>{
    try{
        const pdfPath = path.resolve(__dirname, "../assets/receitas.pdf")
        const loader = new PDFLoader(pdfPath)
        const docs = await loader.load();
        return docs
    }catch (e){
        console.error("erro ao carregar o arquivo:", e)
        throw e
    }
}

module.exports = {loadDocs}