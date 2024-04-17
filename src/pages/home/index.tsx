import { Link, useNavigate } from "react-router-dom"
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
            
        </div>
        <body className={styles.body}>
        <p>{jsonData.welcomeMessage}<p/>
        <p> {jsonData.description} </p>

        </p>
        </body>
        </>
    )
}

export default Home