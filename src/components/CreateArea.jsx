import React, {useState,useEffect,useRef } from "react";



function CreateArea(props) {
  const inputs=useRef()
  useEffect(()=>{
   inputs.current.focus()
  },[])
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
        ref={inputs}
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Create Post..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
      
    </div>
  );
}

export default CreateArea;
