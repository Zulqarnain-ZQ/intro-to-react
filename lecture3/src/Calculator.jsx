import {Fragment, useState, useMemo} from 'react';
import styles from './FormInput.module.css'

/** TODO: Component to add as many numbers as want
 * e.g. If user wants to add 10 numbers, 
 * this would take 10 user inputs and sum this up
 * 
 * 
 * Initially, it would have 2 numbers 
 * but there would be a button to add more 
 * 
 * How & When to store array as a state
 * How to update array values of a state
 * 
 * When to use Array.map vs Array.reduce functions
 * 
 * useMemo => Goal of useMemo is memoize computations in your code
 */


export function Calculator(){

    const [numbers, setNumbers] = useState([0, 0]);
    const [inputFields, setInputFields] = useState(2);

    // Sum 10 Numbers -> Number (reduce)
    const sum = useMemo(() => {

        console.log('In useMemo');

        return numbers.reduce((sum, number) => sum + number)
    }, [numbers])


    return <div className={styles.container}>
        <h1>Simple calculator to sum multiple values</h1>

        <div className={styles.form}>
            {Array.from({length: inputFields})
            .map((_, index) => (
                <Fragment key={index}>
                <label>Number {index+1}</label>
                <input value={numbers[index] || ""} type="number" onChange={(e) => 
                    setNumbers(numbers.map((number, i) => i === index 
                    ? Number(e.target.value): number  )) } />
            </Fragment>)) }
        </div>
        <button onClick={() => {
            setInputFields(inputFields + 1)
            setNumbers([...numbers, 0])
            }}>Add more number</button>

        <span>Sum of numbers is = {sum}</span>
    </div>

}