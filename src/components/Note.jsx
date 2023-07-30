import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={(e) => {
          console.log("((((");
          e.preventDefault();
          props.del(props.index);
        }}
      >
        COMPLETE
      </button>
    </div>
  );
}

export default Note;
