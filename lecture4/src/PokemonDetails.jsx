import { useEffect, useState } from "react"
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom' 
import styles from "./PokemonDetails.module.css"

/** Replacing fetch with axios */
export function PokemonDetails(){

    const params = useParams();
    const id = params.id;

    

    const [error, setError] = useState(null);
    const [pokemonDetails, setPokemonDetails]= useState(null);
    const [loading, setLoading]= useState(true);
    
    const navigate = useNavigate();

 
    useEffect(() =>{
        

        async function fetchPokemonList(){
            try{
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            

            setLoading(false);
            if(response.status !== 200){
                setError("Failed to fetch API response");
                return;
            }

            console.log('Pokemon axios response', response);

           
            setPokemonDetails(response.data);
        }
        catch(err){
            setError("Failed to fetch API response");
        }
        }

        fetchPokemonList()
    }, [id])


    return <div className={styles.container}>
        <h1>Pokemon details </h1>
        {loading && <span>Please wait.....</span>}       
        {!!pokemonDetails ? (
            <div className={styles.grid}>
            <label>Name:</label>
            {pokemonDetails.name}
            <label>Weight:</label>
            {pokemonDetails.weight}
            </div>
        )
         : <span className={styles.error}>{error}</span>}
    </div>   
    
}