import React from "react";
import "./Meanings.css";
import Synonyms from "./Synonyms.js";

export default function Meanings(props){

    return(
        <div className="Meanings">
             {props.value.map((meaning,index)=> (
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
                        <Synonyms synonyms={meaning.synonyms} />
                    </div>
                ) )}
        </div>
    )
}