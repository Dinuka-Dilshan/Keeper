import React from 'react';

const Note = ()=>{
    return(
        <div className="border-1 w-auto px-1 m-1 pb-1 pt-1 mt-1">
            <h4 className=" font-normal fw-bold mt-1 pt-1 mb-1">This is a note title</h4>
            <p className="font-normal fw-700">This is a note content</p>
        </div>
    );
}


export default Note;