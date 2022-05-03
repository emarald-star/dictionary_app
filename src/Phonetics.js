import React from "react";

export default function Phonetics(props){
    

    if(props.data){
    return(
        <div>
       
            <div className="phonetic" >
                <a href={props.data.audio} target="_blank">
                    Listen
                </a>
                {props.data.text}
            </div>
    
        </div>
        
    );
    }else return null;
}