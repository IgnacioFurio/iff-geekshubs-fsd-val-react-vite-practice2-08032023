import { Card } from "../components/card";
import { persona } from "../data/dataBase";

export const Home = ({pepe, titulo, personas, salario}) => {
    return (
        <>
        <h1>home</h1>
        <hr />
        <p>{pepe}</p>
        <p>{titulo}</p>
        <p>{JSON.stringify(personas)}</p>
        <p>{salario}</p>
        <ol>
            {personas.map(persona => {return <li key={persona.id}>{JSON.stringify(persona)}</li> })}
        </ol>
        < Card dataHome={ persona }/>
        </> 
    )
};