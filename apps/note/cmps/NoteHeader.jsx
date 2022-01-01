import { SearchNote } from "./SearchNote.jsx"


export function NoteHeader({onSetFilter}) {
    return (
        <div className="note-header ">
            <div className="main-layout">
            <div className="logo-container ">
                <img src="../assets/img/keep-logo.png" alt="" />
                <span>KeepIt </span>
            </div>
                <SearchNote onSetFilter={onSetFilter}/>

            </div>
        </div>
    )
}