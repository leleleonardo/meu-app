//import App from './App'
import CustomInput from './Input/index'
import ButtonFatec from './button/index'
import { Link } from "react-router-dom"


function Contato() {

  return (
    <>
    <div>
            
            <Link to='/'> Voltar para Home</Link>
    </div>
            
    <body>
      <div className="container">
      <h1>Entre em contato</h1>
      <div className='separator'></div>
      <form>
        <div className="form-group">          
          <CustomInput type="input" placeholder="Nome" initialValue={''} />
        </div>
        <div className="form-group">          
          <CustomInput type="email" placeholder="E-mail" initialValue={''} />
        </div>
        <div className="form-group">          
          <CustomInput type="tel" placeholder="Telefone" initialValue={''} />
        </div>
        <div className='separator'></div>
        <ButtonFatec type="submit" label="Enviar mensagem" />
      </form>
    </div>
    </body>
  
    </>
  );
}


export default Contato