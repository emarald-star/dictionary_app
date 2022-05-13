import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Dictionary.css";
import axios from "axios";
import Response from "./Response";
import Photos from "./Photos";



export default function Dictionary(){
    let [keyword, setkeyword] = useState(" ");
    let[result, setresult] = useState(null);
    let [aresponse, setResponse] = useState(null);
    let [images, setimages] = useState(null);

    function handleResponse(response){
        setresult(response.data)
        setResponse(null)
        console.log(response)
    }
    console.log(result)
    function UpdateKeyword(event){
        setkeyword(event.target.value)
        
    }

    function handleError(response){
        setResponse(response.response.data.message);
        setresult(null);
        console.log(response);
        console.log(response.response.data.message);
        console.log(response.response.data.status);
        console.log(aresponse);
    }
    
    function handleImage(response){
        setimages(response.data.photos)
        console.log(response.data.photos)
        console.log(response)

    }

    function SubmitKeyword(event){
        event.preventDefault()
        let apiurl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiurl).then(handleResponse).catch(handleError);
        console.log(apiurl)

        let imageapikey = '563492ad6f917000010000014a0d80b1cd544bed9916d2f3971d913a';
        let imgapiurl =   `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers = {Authorization: `Bearer ${imageapikey}`}
        axios.get(imgapiurl, {headers: headers}).then(handleImage);
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
                    <div>{form()}</div>
                    <div className="margin mt-1"><strong>Suggestions: </strong>River,Sunrise,Book,forest,egg...</div>
                    {aresponse !== null ? <div className="error">{" - "}{aresponse}</div> : null}
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
                {result !== null ? <Response results={result[0]} /> : null}
                {images !== null ? <Photos results={images} /> : null}
            </div>
        )
    }
}