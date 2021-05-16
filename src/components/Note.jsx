import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';


function Note(props) {



  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button id={props.id} onClick={props.delete}>  <DeleteIcon/>   </button>
    </div>
  );
}

export default Note;
