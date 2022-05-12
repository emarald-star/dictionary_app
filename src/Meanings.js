import React from "react";
import "./Meanings.css";
import Synonyms from "./Synonyms.js";
import Example from "./Example.js";

export default function Meanings(props){

    return(
        <div className="Meanings">
            
             {props.value.map((meaning,index)=> (
                    <section className="PartsOfSpeech" key={index}>
                    {meaning.partOfSpeech}

                        {meaning.definitions.map((definition,index) => (
                            <h5 className="Definition" key={index}>
                                ‣{" "}{definition.definition}
                                <br />
                               <Example value = {definition} />
                                
                                
                            </h5>
                            
                        ))}
                        <Synonyms synonyms={meaning.synonyms} />
                    </section>
                ) )}
                
        </div>
    )
}