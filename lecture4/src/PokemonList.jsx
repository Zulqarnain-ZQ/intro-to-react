import { useEffect, useState } from "react"
import axios from 'axios'
import styles from "./PokemonList.module.css"

/** Replacing fetch with axios */
export function PokemonList(){

    const [error, setError] = useState(null);
    const [pokemonList, setPokemonList]= useState([]);
    const [loading, setLoading]= useState(true);
 
    useEffect(() =>{
        

        async function fetchPokemonList(){
            try{
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
            

            setLoading(false);
            if(response.status !== 200){
                setError("Failed to fetch API response");
                return;
            }

            console.log('Pokemon axios response', response);

           
            setPokemonList(response.data.results);
        }
        catch(err){
            setError("Failed to fetch API response");
        }
        }

        fetchPokemonList()
    }, [])

    return <div className={styles.container}>
        <h1>Pokemon list </h1>
        {loading && <span>Please wait.....</span>}       
        {!!pokemonList.length ? (
            <div className={styles.grid}>
            {pokemonList.map((pokemon, index) =>
            (
            <>
            <span className={styles.tip} key={index}>{pokemon.name}</span>
            <button>Show details</button>
            </>
            ))}
            </div>
        )
         : <span className={styles.error}>{error}</span>}
    </div>   
    
}