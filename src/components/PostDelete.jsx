import React from "react";


function PostDelete(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <>
    <div className="note">
     
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}><span>❎</span></button>
      
    </div>
   
    </>
  );
}

export default PostDelete;
