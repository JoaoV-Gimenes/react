"use client"

import Botao from "@/componentes/Botao";
import Input from "@/componentes/input";
import Lista from "@/componentes/lista";
import BoxSearch from "@/componentes/sec";
import { useEffect, useState } from "react";


export default function Home() {
  const [dados, setDados] = useState({ nome: "", numero: "" })
  const [lista, setLista] = useState([])
  const [enviar, setEnviar] = useState(false)

  useEffect(() => {
    if (!enviar) {
      return;
    }

    if (dados.nome.trim() === "" || dados.numero.trim().length < 9){
      alert("Dados inválidos! confira o nome e número digitado!");
      setEnviar(false);
      return;
    }

    const novoContato = {
      ...dados,
      id: crypto.randomUUID()
    };

    setLista((prev) => [...prev, novoContato]);
    setDados({ nome: "", numero: "" });
    setEnviar(false);
  }, [enviar]);


  const onRemove = (id) => setLista((prev) => prev.filter((c => c.id !== id)))

  return (
    <>
      <BoxSearch>
        <div>
          <h3>Nome: </h3>
          <Input onChange={(e) => setDados((prev) => ({ ...prev, nome: e.target.value }))} value={dados.nome} />
        </div>

        <div>
          <h3>Número: </h3>
          <Input onChange={(e) => setDados((prev) => ({ ...prev, numero: e.target.value }))} value={dados.numero} />
        </div>
      </BoxSearch>
      <Botao onClick={() => setEnviar(true)} />

      <h3>Filtar:</h3>
      <Input onChange={(e) => L}/>
      
      <h1>Contatos ({lista.length})</h1>
      <Lista Dados={lista} onRemove={onRemove}/>
    </>
  );
}
