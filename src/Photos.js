import React from "react";
import "./Photos.css"

export default function Photos(props){
    
    if (props.results !== null)
    return(
        <section className="Photos ">
            <div className="row m-2" >
                {props.results.map((photo,index) => (
                     <div className="col-4 p-2 " key={index}>
                     <a href={photo.src.original} target="_blank" rel="noreferrer"  >
                         <img src={photo.src.landscape} alt = "images" className="img-fluid" />
                     </a>
                 </div>
                ))}
               
            </div>

            
        </section>
    )
    else{
        return null;
    }
}