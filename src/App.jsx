import { useEffect, useState } from "react";
import "./App.css";
import NoteForm from "./Components/NoteForm";
import NoteList from "./Components/NoteList";

function App() {
  const [notes, setNotes] = useState(() => {
    //by re-rendering the page if local staorage is full it will be added to state
    //else it will be an empty array
    const notes = JSON.parse(localStorage.getItem("notes"));
    return notes || [];
  });

  //Storing in local storage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  //Delete items
  const handleDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <>
      <div className="max-w-lg mx-auto bg-gray-100 rounded-lg shadow-lg py-4 px-10">
        <h2 className="text-2xl font-bold mb-4 text-center text-purple-500">
          Notes App
        </h2>
        <NoteForm notes={notes} setNotes={setNotes} />
        <NoteList notes={notes} handleDelete={handleDelete} />
      </div>
    </>
  );
}

export default App;
