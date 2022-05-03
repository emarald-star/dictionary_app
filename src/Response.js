import React from "react";
import "./Response.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Meanings from "./Meanings";
import Phonetics from "./Phonetics";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default function Response(props){
    let meanings = props.results.meanings
    console.log(props.results)
    return(

        <div className="Response">
            <h2 className="Main-word">{props.results.word}   
            {/* <FontAwesomeIcon icon="fa-solid fa-volume" /> */}
                
            </h2>
            <div>
                {props.results.phonetics.map((phonetic,index)=>(
                <h4 className="Phonetic" key={index}> 
                    <Phonetics data={phonetic} />
                </h4>))}
                
               <Meanings value = {meanings} />
            </div>
        </div>
    )
}