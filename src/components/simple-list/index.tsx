import styles from './SimpleList.module.css'

interface Props {
    title: String
    item1: String
    item2: String
    item3: String
}

function SimpleList({title, item1, item2, item3}: Props) {
    return (
        <>
            <div className={styles.rect}>
                {title}  
                <ul>
                    <li>{item1}</li>
                    <li>{item2}</li>
                    <li>{item3}</li>
                </ul>
                <div className={styles.separator}></div>
            </div>
        </>
    )
}

export default SimpleList