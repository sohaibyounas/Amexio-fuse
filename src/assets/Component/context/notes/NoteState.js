import react from "react";
import NoteContext from "./notecontext";

const NoteState = () => {
    const state = {
        "name": "harry",
        "class": "5th"
    };
    return (
        <NoteContextProvider value={{ state }}>
            {props.children}
        </NoteContextProvider>
    )
}

export default NoteState;