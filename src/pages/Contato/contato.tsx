
import Layout from '../../components/layout';

import { Link } from "react-router-dom"
import FormContato from '../../components/form-contato';
import styles from './contato.module.css'


function Contato() {
  return(
  <Layout>
    <div >
      <h1>Contato</h1>
      <FormContato title='Entre em contato'></FormContato>
      <Link className={styles.Link} to='/'> Voltar para Home </Link>
    </div>
  </Layout>
  )
}

export default Contato



//import CustomInput from './Input/index'
//import ButtonFatec from './button/index'

/*return (
  <Layout>
    <div>

      <Link to='/'> Voltar para Home</Link>
      <p></p>
      <Link to='/sobre'>Ir para Sobre</Link>
      <p></p>
      <Link to='/tarefas'>Ir para Tarefas</Link>
      <p></p>
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

  </Layout>
);*/
