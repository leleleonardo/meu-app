/*import { Link } from "react-router-dom"
import Layout from "../../components/layout"
//import styles from "./tarefas.module.css"
import Task from "../../components/tarefa/index"
import { Input } from '@chakra-ui/react'
import ButtonFatec from "../../components/button-fatec"

function Tarefas() {

    return (
        <Layout>


            <h1>Lista de Tarefas</h1>
            <p></p>
            <h1>Inserir nova tarefa</h1>
            <Input placeholder='Digite o título da tarefa' width='auto' />
            <Task></Task>
            <ButtonFatec label='Inserir' type="button" />
            <p></p>
            <label>Tarefa 1</label>
            <ButtonFatec label='Pendente' type="button" />
            <ButtonFatec label='Excluir' type="button" />
            <p></p>
            <label>Tarefa 2</label>
            <ButtonFatec label='Pendente' type="button" />
            <ButtonFatec label='Excluir' type="button" />
            <p></p>
            <label>Tarefa 3</label>
            <ButtonFatec label='Pendente' type="button" />
            <ButtonFatec label='Excluir' type="button" />
            <p></p>
            <Link to='/'> Voltar para home</Link>

        </Layout>
    )

}

export default Tarefas

import Layout from "../../components/layout"
import Task from "../../components/tarefa"





function Tarefas(){
    return (
        <Layout>
                    <div>
                        <h1>LISTA DE TAREFAS</h1>
                        <Task name={'Inserir nova tarefa'}></Task>
                        
                        
                    </div>
        </Layout>
    )
}

export default Tarefas*/

import { Link } from "react-router-dom"
import Layout from "../../components/layout"
import ItemTarefa from "./item-tarefa"
import { useEffect, useState } from "react"
import FormTarefa from "../../components/tarefa/form-tarefa"
import { Tarefa } from "../../interfaces/tarefas"





function Tarefas() {

    const [tarefas, setTarefas] = useState<Tarefa[]>([])

    function carregarLista() {
        return [
            { id: 1, nome: "Tarefa 1", concluida: false },
            { id: 2, nome: "Tarefa 2", concluida: false }
        ]
    }

    useEffect(() => {
        alert('Render')
        const tarefas = carregarLista()
        setTarefas(tarefas)
    }, [])

    function apagarTarefa(id: number) {
        const tarefasAtualizadas = tarefas.filter((tarefa) => tarefa.id !== id)
        setTarefas(tarefasAtualizadas)
    }

    return (
        <Layout>
            <h1>Tarefas</h1>
            <Link to='/'>Voltar para Home</Link>
            <hr />
            <FormTarefa
                tarefas={tarefas}
                setTarefas={setTarefas} />
            {
                tarefas.map((tarefa) => (
                    <ItemTarefa
                        key={tarefa.id}
                        apagarTarefa={apagarTarefa}
                        titulo={tarefa.nome}
                        idTarefa={tarefa.id} />
                ))
            }
        </Layout>
    )
}

export default Tarefas