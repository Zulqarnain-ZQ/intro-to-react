import {useState} from 'react';
import styles from "./FormInput.module.css"

/**
 * TODO: Add inputs for firstName, lastName and age
 * 
 * Add a button to show inputted data
 */
export function FormInput(){

const [firstName, setFirstName] = useState('');



return <div className={styles.container}>
    <h1>User form input</h1>


    <div className={styles.form}>
        <label>Enter first name</label>
        <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
    </div>

    <button>Save data</button>
</div>


}