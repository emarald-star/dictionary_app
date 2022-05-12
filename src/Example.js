import React from "react";
import "./Examples.css";

export default function Example(props){
        if(props.value.example){
            return(
            <div className="Examples">
                <span className="Examples"> Example:</span>
      
                <span className="Example">{props.value.example}</span>
            </div>
            );
} 
    else {
        return null;
    }
}