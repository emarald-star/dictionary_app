import React from "react";
import "./Synonyms.css";

export default function Synonyms(props){
    
    if(props.synonyms){
    return(
        <div className="container">
        <div className="Synonyms row">
            {
                props.synonyms.map((synonym,index)=>(
                    <div className="col" key={index}>
                        {synonym}
                    </div>
                ))
            }
            </div>
        </div>

    )
             
        
    }else {
        return(null)
    }
}