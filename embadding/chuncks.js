const { PDFLoader } = require("@langchain/community/document_loaders/fs/pdf");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

const loadDocs = async (file) => {
  try {
    const tempDir = path.join(__dirname, "temp_pdfs");
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir);
    }

    // Gera um nome único para o arquivo temporário
    const tempFilePath = path.join(tempDir, `${uuidv4()}_${file.originalname}`);

    // Salva o buffer no arquivo
    fs.writeFileSync(tempFilePath, file.buffer);

    const pdfPath = path.resolve(tempFilePath);
    const loader = new PDFLoader(pdfPath);
    const docs = await loader.load();
    return docs;
  } catch (e) {
    console.error("Error on load file:", e);
    throw e;
  }
};

module.exports = { loadDocs };
