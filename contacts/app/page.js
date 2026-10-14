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
      return
    }

    setDados((prev) => ({ ...prev, id: Date.now() }))
    setLista((prev) => [...prev, dados])
    setDados({ nome: "", numero: "" })
    setEnviar(false)
  }, [enviar])


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
      <Lista Dados={lista} />
    </>
  );
}
