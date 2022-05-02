import React from "react";
import "./Response.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default function Response(props){
    
    console.log(props.results)
    return(
        <div className="Response">
            <h2 className="Main-word">{props.results.word}   
            <FontAwesomeIcon icon="fa-solid fa-volume" />
                
            </h2>
            <h3>
                {props.results.meanings[0].definitions[0].definition}
            </h3>
        </div>
    )
}