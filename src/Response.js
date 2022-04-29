import React from "react";

export default function Response(props){
    console.log(props.results)
    return(
        <div className="Response">
            <h2>{props.results.word}</h2>
            <h3>
                {props.results.meanings[0].definitions[0].definition}
            </h3>
        </div>
    )
}