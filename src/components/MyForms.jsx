import { useState } from "react";
import "./MyForms.css";

const MyForms = () => {
  //3 - Gerenciamento de dados
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleName = (e) => {
    setName(e.target.value);
  };


  console.log(name);
  console.log(email);

  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log("Enviando o formulário...")
    console.log(name,email)
  }

  return (
    <div>
      {/* 5 - Envio de forms */}  

      {/*1 - Criação do Form*/}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} />
        </div>
        {/* 2 - Label envolvendo input */}
        <div>
            {/* 4 - Simplificação de manipulação de state */}
          <label>
            <span>Email</span>
            <input type="email" name="email" placeholder="Digite o seu email" onChange={(e) => setEmail(e.target.value)} />
          </label>
        </div>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForms;
