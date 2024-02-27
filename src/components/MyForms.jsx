import { useState } from "react";
import "./MyForms.css";

const MyForms = () => {
  //3 - Gerenciamento de dados
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  console.log(name);
  console.log(email);
  return (
    <div>
      {/*1 - Criação do Form*/}
      <form>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} />
        </div>
        {/*Label envolvendo input */}
        <div>
          <label>
            <span>Email</span>
            <input type="email" name="email" placeholder="Digite o seu email" onChange={handleEmail} />
          </label>
        </div>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForms;
