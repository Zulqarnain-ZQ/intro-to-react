import { useMemo, useEffect, useState } from "react"
import axios from 'axios'
import {useNavigate} from 'react-router-dom';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody'; 
import TableHead from '@mui/material/TableHead'; 
import Table from "@mui/material/Table";
import Link from "@mui/material/Link";
import styles from "./PokemonList.module.css"

/** Replacing fetch with axios */
export function PokemonList(){

    const [error, setError] = useState(null);
    const [pokemonList, setPokemonList]= useState([]);
    const [loading, setLoading]= useState(true);
    const navigate = useNavigate();

    const columns = useMemo(() => [
        {
            header:  'Name',
            fieldKey: 'name'
        },  
        {
            
            header:  'Action',
            render:(item) =>{
                const urlSegments =item.url.split('/'); 
                const id = urlSegments[urlSegments.length-2];
                return <Link href={`/pokemon/${id}`}>See details</Link>}
        
        }
], [])

 
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
            <TableContainer>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            {columns.map((column,index) => <TableCell key={index} >{column.header}</TableCell>)}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                    {pokemonList.map((pokemon, index) => {
                        return <TableRow key={index}>
                            {columns.map((column) => <TableCell>{column.render ? column.render(pokemon) : pokemon[column.fieldKey]}</TableCell>)}
                        </TableRow>
                    })}
                    </TableBody>
                </Table>

            </TableContainer>
        )
         : <span className={styles.error}>{error}</span>}
    </div>   
    
}