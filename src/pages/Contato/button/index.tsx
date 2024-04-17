//import './ButtonFatec.css' //className ='botao-fatec'
import styles from './ButtonFatec.module.css' // styles.botaoFatec

interface Props{
    type: 'button' | 'submit' | 'reset'
    label: string
}

function ButtonFatec ({type, label}: Props){
return (
    <button className = {styles.ButtonFatec}type= {type}>
        {label}
        </button>
)

}

export default ButtonFatec