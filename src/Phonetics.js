import React from "react";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { IconButton } from "@mui/material";
import "./Phonetic.css"

export default function Phonetics(props){
    function handleClick(event){
        
        let audio = new Audio(props.data.audio);
        return(
           audio.play()
        );
      }

    if(props.data){
    return(
        <div className="Phonetic">
      
        <IconButton className="button" aria-label="listen" color="primary" onClick={handleClick} >
          <VolumeUpIcon  />
        </IconButton>
      
      <span className="text">{props.data.text}</span>
    </div>
        
    );
    }else return null;
}