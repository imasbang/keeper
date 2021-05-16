import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [note, setNote] = useState({ title: "", content: "" });
  const [post, setPost] = useState([]);
  function writeNote(event) {
    const info = event.target;
    setNote({ ...note, [info.name]: info.value });
  }

  function postNote(event) {
    var filled = Object.values(note).every((item) => item !== "");
    if (filled) {
      setPost([...post, note]);
      setNote({title: "", content: "" });
   
    }

    event.preventDefault();
  }

  function del(event) {
    const newList = post;
    newList.splice(event.target.id, 1);
    setPost([...newList]);
  }

  return (
    <div>
      <Header />
      <CreateArea
        Changed={writeNote}
        Clicked={postNote}
        title={note.title}
        content={note.content}
      />
      {post.map((name, index) => (
        <Note
          title={name.title}
          content={name.content}
          key={index}
          id={index}
          delete={del}
        />
      ))}
      
      <Footer />
    </div>
  );
}

export default App;
