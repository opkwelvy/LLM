import React, { Dispatch, SetStateAction } from "react";

type inputType = {
  setQuery: (string:string) => void
  setFile: any;
  sendQuery: ()=> void
}
export const Input = ({setFile, setQuery, sendQuery}:inputType) => {
  return (
    <div className="input-container">
      <div className="file-input">
        <label htmlFor="file">Selecione o arquivo:</label>
        <input type="file" name="file" id="" onChange={(e)=>{
          setFile(e.target.files?.[0] ?? null);
        }}/>
      </div>

      <div className="question-input">
        <label htmlFor="">Faça sua pergunta sobre o conteúdo do arquivo</label>
        <input type="text" placeholder="Pergunte!" onChange={(e)=>{
          setQuery(e.target.value)
        }}/>
      </div>
      <button onClick={sendQuery}>Enviar</button>
    </div>
  );
};
