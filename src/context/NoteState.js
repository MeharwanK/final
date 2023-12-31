import React from "react";
import NoteContext from "./noteContext";

export const NoteContext =(props) =>{
    const s1 ={
        name: "Meharwan",
        class: "BSCS-VII "
    }
    return(
        <NoteContext.Provider value={s1}>
            {props.children}
        </NoteContext.Provider>
    )
}