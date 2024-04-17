import { Link } from "react-router-dom"

function Tarefas(){
    return(
        <>
        <div>
        <h1>Tarefas</h1>
        <Link to='/'> Voltar para Home </Link>
        <ul>
            <li> Tarefa 1</li>
            <li> Tarefa 2</li>
            <li> Tarefa 3</li>
            <li> Tarefa 4</li>
        </ul>

        </div>
        </>
    )
}

export default Tarefas