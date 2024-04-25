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

export default Tarefas*/

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

export default Tarefas