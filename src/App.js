import "./styles.css";
import { useState } from "react";

export default function App() {
  const [nomes, setNomes] = useState([
    "Carol",
    "Evelyn",
    "Fernanda",
    "Grazy",
    "Joy",
    "Karynne",
    "Kleber",
    "Leno",
    "Marina",
    "Naiara"
  ]);

  const [imagens, setImagens] = useState([
    "https://images.multipedidos.com.br/highlightImages/YaAFQnt6piKIfj4DsZHzDKnhSv9oMwmuCjBX5TZc2iFbQfrON4XHlwW21gBVPork/lg_YaAFQnt6piKIfj4DsZHzDKnhSv9oMwmuCjBX5TZc2iFbQfrON4XHlwW21gBVPork.jpg",
    "https://blog.letskuk.com.br/wp-content/uploads/2022/10/lanches-gourmet.jpg",
    "https://blog.zanottirefrigeracao.com.br/wp-content/uploads/2017/09/lanche-na-chapa-1024x768.jpg"
  ]);

  const [cores, setCores] = useState(["tomato", "pink", "red", "blue"]);

  // Um array é uma lista que dentro dessa lista podemos guardar,
  // milhares de informações diferentes, como imagens, descrição do filme, imagens de produtos, cores, nomes, endereços.....

  // métodos de array utilizamos para manipular(fazer alguma ação) os nossos arrays.

  // map() -> Ele irá passar por cada uma das informações que nós contidas dentro dos nossos arrays é irá aplicar uma ação sobre essas informações.
  return (
    <div>
      {/* {imagens.map((item) => (
        <img src={item} alt="" />
      ))} */}

      {cores.map((item) => (
        <div style={{ backgroundColor: item }}> cores </div>
      ))}
    </div>
  );
}
