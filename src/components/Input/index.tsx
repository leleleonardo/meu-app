
//import './CustomInput.css'; // Corrigindo o import para o arquivo CSS local
import styles from './CustomInput.module.css'; // Importando estilos do arquivo module.css

interface Props {
  initialValue: string;
  type: string;
  placeholder: string;
}

function CustomInput({ initialValue, type, placeholder }: Props) {
  return (
    <input className={styles.CustomInput} type={type} value={initialValue} placeholder={placeholder} />
  );
}

export default CustomInput;