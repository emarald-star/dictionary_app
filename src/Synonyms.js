import React from "react";
import "./Synonyms.css";

export default function Synonyms(props){
    
    if(props.synonyms.length !== 0){
    return(
        <div className="Synonyms">
                    <span className="synonym">Synonyms: </span>
            {
                props.synonyms.map((synonym,index)=>(
                    <span className="synonym-ex" key={index}>
                        {synonym}
                    </span>
                ))
            }
            
        </div>

    )
             
        
    }else {
        return(null)
    }
}