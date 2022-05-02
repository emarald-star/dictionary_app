import React from "react";
import "./Response.css";
import 'bootstrap/dist/css/bootstrap.min.css';
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
                <h4 className="Phonetic" key={index}> {phonetic.text}
                </h4>))}
                
                {meanings.map((meaning,index)=> (
                    <div className="PartsOfSpeech" key={index}>
                    {meaning.partOfSpeech}

                        {meaning.definitions.map((definition,index) => (
                            <h5 className="Definition" key={index}>
                                {definition.definition}
                                <div className="Example">
                                    {definition.example}
                                </div>
                            </h5>
                        ))}
                    </div>
                ) )}
            </div>
        </div>
    )
}