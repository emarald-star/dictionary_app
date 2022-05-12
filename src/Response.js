import React from "react";
import "./Response.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Meanings from "./Meanings";
import Phonetics from "./Phonetics";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default function Response(props){
    let meanings = props.results.meanings
    console.log(props.results)
   
    return(

        <div className="Response">
            <section>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="Main-word ">{props.results.word}   

                        </h2>
                    </div>
                    
                    <div className="col box">
                        {props.results.phonetics.map((phonetic,index)=>(
                         <h4 className="Phonetic" key={index}> 
                            <Phonetics data={phonetic} />
                        </h4>))}
                    </div>
                </div>
            </div>
            </section>
                
            <Meanings value = {meanings} />
               
        </div>
    )
}