import styles from './Label.module.css'


export function Label({label, value}){
    return (
        <div className={styles.labelContainer}>
            <div className={styles.label}>{label}: </div>
            <div>{value}</div>
        </div>
    )
 }