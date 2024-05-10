import { useEffect, useState } from "react"
import axios from 'axios'
import styles from "./TipOfTheDay.module.css"

/** Replacing fetch with axios */
export function TipOfTheDay(){

    const [error, setError] = useState(null);
    const [tip, setTip]= useState(null);
    const [loading, setLoading]= useState(true);
 
    useEffect(() =>{
        /** 4 step process of API calls
         * 1) Browser => Make HTTP request to the API server 10:26:01
         * 2) API Server => Receives the request from the browser 
         * 3) API server => Processes the request(Get, Post,PUT, AND PATCH) from the browser & sends Data back to browser & may take time depending on the processing (1)
         * 4) Browser =>Receives the data (downloads the data) and displays it 10:26:03
         */

        async function fetchTipOfTheDay(){
            const response = await axios.get("https://api.adviceslip.com/advice");
            

            setLoading(false);
            if(response.status !== 200){
                setError("Failed to fetch API response");
                return;
            }

            console.log('Axios response', response);

           
            setTip(response.data.slip.advice);

        }

        fetchTipOfTheDay()
    }, [])

    return <div className={styles.container}>
        <h1>Tip of the day </h1>
        {loading && <span>Please wait.....</span>}       
        {!!tip ? (<span className={styles.tip}>{tip}</span>)
         : <span className={styles.error}>{error}</span>}
    </div>   
    
}