/*import { Link, useNavigate } from "react-router-dom"
import styles from './home.module.css'
import jsonData from './data.json'

function Home(){
    const navigate = useNavigate()

    return (
        
        <>
        <div className={styles.container}>
            <h1 onClick={() => {
                navigate('/sobre')
            }}>Home</h1>
            <Link to='/sobre'>Ir para Sobre</Link>

            <p></p>
            
            <Link to='/Contato'> Ir para Contato </Link>

            <p></p>

            <Link to='/Tarefas'> Ir para Tarefas </Link>
            <ButtonFatec label='Teste' type="button" />
        </div>

        <body className={styles.container}>
        <p>{jsonData.welcomeMessage}<p/>
        <p> {jsonData.description} </p>

        </p>
        </body>
        </>
    )
}

export default Home*/


import { Link } from "react-router-dom"
import ButtonFatec from "../../components/button-fatec"
//import Topo from "../../components/topo"
//import Rodape from "../../components/rodape"
//import { Grid, GridItem } from "@chakra-ui/react"
import Layout from "../../components/layout"

function Home(){
    return (
        <Layout>
            <div>
                <h1>Home</h1>
                
                <p></p>
                <Link to='/sobre'>Ir para Sobre</Link>
                <p></p>
                <Link to='/Contato'>Ir para Contato</Link>
                <p></p>
                <Link to='/tarefas'>Ir para Tarefas</Link>
                <p></p>
                <ButtonFatec label='Teste de botão' type="button" />
            </div>
        </Layout>
    )
}

export default Home