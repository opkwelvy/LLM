import { useState } from "react";
import "./App.css";
import { Input } from "./components/input/Input";
import { Header } from "./components/header/Header";
import { Answer } from "./components/answer/Answer";
import { queryService } from "./service/query";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("")
  const [file, setFile] = useState<File>()
  const [answer, setAnswer] = useState("");
  const sendQuery = async () => {
    try {
      setIsLoading(true);
      if(file){ 
        const response = await queryService({file, query})
        setAnswer(response.message)
      }
  
    } catch (e) {
      console.error(e);
      throw e;
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Header />
      <Input sendQuery={sendQuery} setFile={setFile} setQuery={setQuery}/>
      {isLoading ? <h2>Carregando...</h2> : <Answer answer={answer} />}
    </>
  );
}

export default App;
