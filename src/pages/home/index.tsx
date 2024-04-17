import { Link, useNavigate } from "react-router-dom"

function Home(){
    const navigate = useNavigate()

    return (
        <div>
            <h1 onClick={() => {
                navigate('/sobre')
            }}>Home</h1>
            <Link to='/sobre'>Ir para Sobre</Link>
        </div>
    )
}

export default Home