import { useEffect } from "react"

export function TipOfTheDay(){
 
    useEffect(() =>{
        /** 4 step process of API calls
         * 1) Browser => Make HTTP request to the API server 10:26:01
         * 2) API Server => Receives the request from the browser 
         * 3) API server => Processes the request(Get, Post,PUT, AND PATCH) from the browser & sends Data back to browser & may take time depending on the processing (1)
         * 4) Browser =>Receives the data (downloads the data) and displays it 10:26:03
         */

        async function fetchTipOfTheDay(){
            const data = await fetch("https://api.adviceslip.com/advice");
            console.log('response data',data);

        }

        fetchTipOfTheDay()
    }, [])

    return <div>Tip of the day (In progress)</div>   
    
}