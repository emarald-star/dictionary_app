import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Dictionary.css";
import axios from "axios";
import Response from "./Response"



export default function Dictionary(){
    let [keyword, setkeyword] = useState(" ");
    let[result, setresult] = useState(null);

    function handleResponse(response){
    setresult(response.data)
    }
    console.log(result)
    function UpdateKeyword(event){
        setkeyword(event.target.value)
        
    }

    function SubmitKeyword(event){
        event.preventDefault()
        let apiurl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiurl).then(handleResponse)
        console.log(apiurl)
    }

    function form(){
        return(
        <form className="input-group" onSubmit={SubmitKeyword} >
            <div className="form-outline">
                <input type="search" id="form1" className="form-control" placeholder="Search for a word..." onChange={UpdateKeyword}/> 
            </div>
            <button type="submit" className="btn btn-primary">
                Search
            </button>
        </form>
        )   
    }

    if (result === null) {

        return(
        
            <div className="Dictionary">
                <section>
                <div className="mt-5">What word do you want to look up?</div>
                {form()}
                <small><strong>Suggestions:{ " "}</strong>River,Sunrise,Book,forest,egg...</small>
                </section>
                
            </div>
        )
    } 

    else{

        return(
            <div className="Dictionary">
                <section>
                 {form()}
                 <small><strong>Suggestions:{ " "}</strong>River,Sunrise,Book,forest,egg...</small>
                 </section>
                <Response results={result[0]} />
            </div>
        )
    }
}