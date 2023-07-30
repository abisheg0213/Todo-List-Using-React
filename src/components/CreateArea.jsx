import React from "react";

function CreateArea(props) {
  const [title, settitle] = React.useState("");
  const [content, setcontent] = React.useState("");
  return (
    <div>
      <form>
        <input
          name="title"
          onChange={(e) => {
            settitle(e.target.value);
          }}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={(e) => {
            setcontent(e.target.value);
          }}
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            props.add({ title: title, content: content });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
