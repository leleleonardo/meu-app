import { Link } from "react-router-dom"
import jsonData from './data.json'

function Sobre(){
    return (
        <>
        <div>
            <h1>Sobre</h1>
            <Link to='/'>Voltar para Home</Link>
        </div>
        <p>{jsonData.welcomeMessage}</p>
        <p>{jsonData.description}</p>
        </>
    )
}

export default Sobre