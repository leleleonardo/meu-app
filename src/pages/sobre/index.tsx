import { Link } from "react-router-dom"
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
        
        </>
    )
}

export default Sobre