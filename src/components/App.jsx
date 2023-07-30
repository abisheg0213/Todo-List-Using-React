import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
function App() {
  const [Notes, setnotes] = React.useState([]);
  function addnote(note) {
    setnotes([...Notes, { title: note.title, content: note.content }]);
  }
  function deletenote(id) {
    console.log(id);
    setnotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        console.log(index);
        return index !== id;
      });
    });
  }
  function createNote(data, index) {
    return (
      <Note
        key={index}
        index={index}
        title={data.title}
        del={deletenote}
        content={data.content}
      />
    );
  }
  return (
    <div>
      <Header />
      <CreateArea add={addnote} />
      {Notes.map(createNote)}
      <Footer />
    </div>
  );
}

export default App;
