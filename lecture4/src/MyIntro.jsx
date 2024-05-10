import styles from './MyIntro.module.css'
import { Label }from './Label';


export function MyIntro({firstName, lastName, age, male, obj}){
    return (
        <div>
            <h1> Intro about me</h1>
            <div className={styles.container}>
                <Label label={"First name"} value={firstName} />
                <Label label={"Last name"} value={lastName} />
                <Label label={"Age"} value={age} />
                <Label label={"Gender"} value={male ? "Male": "Female"} />
            </div>
        </div>)
}