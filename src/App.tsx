import './App.css'
import CustomInput from './components/Input';
import ButtonFatec from './components/button-fatec'


function App() {

  return (
    <>
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
    </>
  );
}

//const App = () => {}

export default App
