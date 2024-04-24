/*import { Link } from "react-router-dom"
import jsonData from './data.json'
import styles from './sobre.module.css'

function Sobre(){
    return (
        <>
        <div className={styles.body}>
            <h1>Sobre</h1>
            <Link to='/'>Voltar para Home</Link>
            <p>{jsonData.welcomeMessage}</p>
        <p>{jsonData.description}</p>
        </div>
        <body>
            
        
        <div className={styles.container}>
            <h2>Teste</h2>
           <p>{jsonData.welcomeMessage}</p>
        <p>{jsonData.description}</p>
        </div>
        </body>
        </>
    )
}

export default Sobre/**/

import { Link } from "react-router-dom"
import Layout from "../../components/layout"


function Sobre(){
    return (
        <Layout>
        <h1>Sobre</h1>
                <p></p>
                <Link to='/'>Voltar para Home</Link>
                <p></p>
                <Link to='/Contato'>Ir para Contato</Link>
                <p></p>
                <Link to='/tarefas'>Ir para Tarefas</Link>
        </Layout>
        
    )
}

export default Sobre