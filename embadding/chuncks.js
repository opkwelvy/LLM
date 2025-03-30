const {PDFLoader} = require("@langchain/community/document_loaders/fs/pdf")
const path = require("path")
const loadDocs = async () =>{
    try{
        console.log('chunck')

        const pdfPath = path.resolve(__dirname, "../assets/receitas-texto.pdf")
        const loader = new PDFLoader(pdfPath);
      
          const docs = await loader.load();
          return docs
          
    }catch (e){
        console.error("Error on load file:", e)
        throw e
    }
}

module.exports = {loadDocs}