import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Dictionary.css";



export default function Dictionary(){
let [keyword, setkeyword] = useState(" ");

function UpdateKeyword(event){
    setkeyword(event.target.value)
  
}

function SubmitKeyword(event){
    event.preventDefault()
    alert(`Search ${keyword}`)
}

return(
   
    <div className="Dictionary">
        <form className="input-group" onSubmit={SubmitKeyword} >
            <div className="form-outline">
                <input type="search" id="form1" className="form-control" placeholder="Enter the word..." onChange={UpdateKeyword}/> 
            </div>
            <button type="button" className="btn btn-primary">
                Search
            </button>
        </form>
        
    </div>
)
}