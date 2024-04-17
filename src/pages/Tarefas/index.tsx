import { Link } from "react-router-dom"
import styles from './tarefas.module.css'

function Tarefas(){
    return(
        <>
        <div className={styles.container}>
        <h1>Tarefas</h1>
        <Link to='/'> Voltar para Home </Link>
        

        </div>
        <body className={styles.body}>
        <ul>
            <li> Tarefa 1</li>
            <li> Tarefa 2</li>
            <li> Tarefa 3</li>
            <li> Tarefa 4</li>
        </ul>
        </body>
        </>
    )
}

export default Tarefas