import { useState } from "react";
import "./MyForms.css";

const MyForms = ({user}) => {
  // 6 - Controlled Inputs 

  //3 - Gerenciamento de dados
  const [name, setName] = useState(user? user.name: "");
  const [email, setEmail] = useState(user? user.email:"");
  const [bio, setBio] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };


  console.log(name);
  console.log(email);

  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log("Enviando o formulário...")
    console.log(name,email,bio)

    //Validação
    //Envio

    //7 - Limpar formulário
    setName("");
    setEmail("");
    setBio("");
  }

  return (
    <div>
      {/* 5 - Envio de forms */}  

      {/*1 - Criação do Form*/}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
           type="text"
           name="name"
           placeholder="Digite o seu nome"
           value={name}
           onChange={handleName} />
        </div>
        {/* 2 - Label envolvendo input */}
        <div>
            {/* 4 - Simplificação de manipulação de state */}
          <label>
            <span>Email</span>
            <input 
            type="email"
            name="email"
            placeholder="Digite o seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
          </label>
          {/* 8 - textArea */}
          <label >
            <span>Bio:</span>
            <textarea name="bio" placeholder="Descrição do usuário" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
          </label>
        </div>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForms;
