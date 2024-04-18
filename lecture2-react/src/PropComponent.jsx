import styles from './PropComponent.module.css'

/** TODO: Change JSX and css styles to make the PropComponent like that
 * FirstName: {Muhammad}
 * LastName: {Zulqarnain}
 * Age: {30}
 * Gender: {Male}
 */

export function PropComponent({firstName, lastName, age, male, obj}){

    return <div className={styles.container}>
        Hello, my name is {firstName} {lastName} 
        with age of {age}  {male ?"true": 'false'}
        
        <div style={{backgroundColor: 'purple'}}>{JSON.stringify(obj)}</div>
        </div>
}