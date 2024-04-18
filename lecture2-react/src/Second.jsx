import { First } from "./First"
import styles from "./Second.module.css"

export function Second(){

    

    return <div className={styles.container}>
        Hello from functional component
        <First />
        </div>
}