type queryType = {
    file: File,
    query: string
    
}
const url = import.meta.env.VITE_API_URL

export const queryService = async ({file, query}:queryType) => {
    const formData = new FormData();
    formData.append("file", file)
    formData.append("query", query)
    try {
      const response = await fetch(`${url}/query`, {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        
        throw new Error(`Erro ao enviar a query e/ou o arquivo: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    } 
  };