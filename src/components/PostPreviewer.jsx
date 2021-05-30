
import React, { useState } from "react";
import "../components/styles.css"
import PostDelete from "./PostDelete";
import CreateArea from "./CreateArea";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PostPreviewer() {
    const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
 
    return (
        <div className="container">
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <PostDelete
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        
        );
       
      })}
   
    </div>
    )
}
