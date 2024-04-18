import styles from './PropComponent.module.css'

/** TODO: Change JSX and css styles to make the PropComponent like that
 * FirstName: {Muhammad}
 * LastName: {Zulqarnain}
 * Age: {30}
 * Gender: {Male}
 * TODO: Address
 * Address: {App}
 */

export function PropComponent({firstName, lastName, age, male, obj}){

    


    return <div className={styles.container}>
        <div className={styles.labelContainer}>
            <div>First name: </div>
            <div>{firstName}</div>
        </div>
        <div className={styles.labelContainer}>
            <div>Last name: </div>
            <div>{lastName}</div>
        </div>
        <div className={styles.labelContainer}>
            <div>Age: </div>
            <div>{age}</div>
        </div>
        <div className={styles.labelContainer}>
            <div>Gender: </div>
            <div>{male ? "Male": "Female"}</div>
        </div>
        </div>
}