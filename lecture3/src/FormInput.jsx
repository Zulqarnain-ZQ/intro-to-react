import {useState} from 'react';
import styles from "./FormInput.module.css"

/**
 * TODO: Add inputs for firstName, lastName and age
 * 
 * Add a button to show inputted data
 */
export function FormInput({onSaveData}){

const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [age, setAge] = useState(0);
const [gender, setGender] = useState('Male');



return <div className={styles.container}>
    <h1>User form input</h1>


    <div className={styles.form}>
        <label>Enter first name</label>
        <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />

        <label>Enter last name</label>
        <input value={lastName} onChange={(e) => setLastName(e.target.value)} />

        <label>Enter your age</label>
        <input value={age} type="number" onChange={(e) => setAge(e.target.value)} />

        <label>Enter your gender</label>
         <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
        </select> 
    </div>

    <button onClick={() => onSaveData({
        firstName,
        lastName,
        age,
        gender
    })}>Save data</button>
</div>


}