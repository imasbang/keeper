import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';



function CreateArea(props) {
var [textPop, setTextPop] = useState(false);
var [inputDisplay, setInputDisplay] = useState({display:'none'});
var [textRow, setTextRow] = useState(1);
    function titleClick(event){
        setTextPop(true);
        setInputDisplay({display:'block'});
        setTextRow(3);

    }

    


  return (
    // <div>
   
      <form className="create-note" onSubmit={props.Clicked}>
        <Zoom  in={textPop}> 
        <input style={inputDisplay} autoComplete="off" onChange={props.Changed} name="title" placeholder="Title" value={props.title} />
        </Zoom>


        <textarea onClick={titleClick} onChange={props.Changed} name="content" placeholder="Take a note..." rows={textRow} value={props.content} />
        
        
        

        <Zoom   in={textPop}>

        
        <Fab color="primary" aria-label="add" onClick={props.Clicked}>
        <AddIcon/> 
        {/* <button onClick={props.Clicked}>  <AddIcon/>  </button> */}
        </Fab>

        </Zoom>
       


      </form>
    // </div>
  );
}




export default CreateArea;
