
//import './CustomInput.css'; // Corrigindo o import para o arquivo CSS local
import styles from './CustomInput.module.css'; // Importando estilos do arquivo module.css

interface Props {
  defaultValue: string;
  type: string;
  placeholderText: string;
}

function CustomInput({ defaultValue, type, placeholderText }: Props) {
  return (
    <input 
    className={styles.CustomInput} 
    type={type} 
    value={defaultValue} 
    placeholder={placeholderText} 
    />
  );
}

export default CustomInput;