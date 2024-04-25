//import './ButtonFatec.css' //className ='botao-fatec'
//import styles from './ButtonFatec.module.css' // styles.botaoFatec
import {Button} from '@chakra-ui/react'
interface Props{
    type: 'button' | 'submit' | 'reset'
    label: string
}

function ButtonFatec ({type, label}: Props){
return (
    <Button colorScheme='blue' size='small'variant='outline' type={type}>
        {label}
        </Button>
)

}

export default ButtonFatec