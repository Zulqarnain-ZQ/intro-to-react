import {useState} from 'react';
import styles from "./FormInput.module.css"

/**
 * TODO: Add inputs for firstName, lastName and age
 * 
 * Add a button to show inputted data
 */
export function FormInput({onSaveData}){

const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    age: 0,
    gender: 'Male',
    address: ''
});

function handleUpdate(key, value){
    setUserData({
        ...userData,
        [key]: value
    })
}



return <div className={styles.container}>
    <h1>User form input</h1>


    <div className={styles.form}>
        <label>Enter first name</label>
        <input value={userData.firstName} onChange={(e) => {
           handleUpdate('firstName', e.target.value)
        }} />

        <label>Enter last name</label>
        <input value={userData.lastName} onChange={(e) => handleUpdate('lastName',  e.target.value)} />

        <label>Enter your age</label>
        <input value={userData.age} type="number" onChange={(e) => handleUpdate('age',  e.target.value)} />

        <label>Enter your address</label>
        <input value={userData.address}  onChange={(e) => handleUpdate('address',  e.target.value)} />

        <label>Enter your gender</label>
         <select value={userData.gender} onChange={(e) => handleUpdate('gender',  e.target.value)}>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
        </select> 
    </div>

    <button onClick={() => onSaveData(userData)}>Save data</button>
</div>


}