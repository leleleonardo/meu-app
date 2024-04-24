import ButtonFatec from '../button-fatec'
import CustomInput from '../Input'
import styles from './formContato.module.css'

interface Props {
    title: string
}

function FormContato({title}: Props) {
    return (
        <>
                <div className={styles.rect}>
                {title}
                <div className={styles.separator}></div>
                
                <form>
                <CustomInput type='input' defaultValue='' placeholderText='Nome' />
                <CustomInput type='input' defaultValue='' placeholderText='Email' />
                <CustomInput type='input' defaultValue='' placeholderText='Telefone' />
                </form>

                <div className={styles.separator}></div>

                <ButtonFatec type='button' label='FATEC: Send Mensage' />
                </div>
        </>
    )
}

export default FormContato