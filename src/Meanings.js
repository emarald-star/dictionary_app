import React from "react";
import "./Meanings.css";

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
                    </div>
                ) )}
        </div>
    )
}