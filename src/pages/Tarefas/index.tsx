import { Link } from "react-router-dom"
import Layout from "../../components/layout"
import SimpleList from "../../components/simple-list"
import styles from "./tarefas.module.css"

function Tarefas() {

    return (
        <Layout>
        <div className={styles.container}>
            <SimpleList
            title=' Lista de tarefas'
            item1='Tarefa 1'
            item2='Tarefa 2'
            item3='Tarefa 3'
            />
            <Link to='/'> Voltar para home</Link>
        </div>
        </Layout>
    )



   /* return (
        <Layout>
            <div>
                <h1> Lista de Tarefas</h1>

                <ul>
                    <li> Tarefa 1</li>
                    <li> Tarefa 2</li>
                    <li> Tarefa 3</li>
                    <li> Tarefa 4</li>
                </ul>

                <p></p>
                <Link to='/'> Voltar para Home </Link>
                <p></p>
                <Link to='/Contato'>Ir para Contato</Link>
                <p></p>
                <Link to='/tarefas'>Ir para Tarefas</Link>
                <p></p>

            </div>
        </Layout>
    )*/
}

export default Tarefas

