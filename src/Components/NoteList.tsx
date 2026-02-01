// @ts-ignore
const NoteList = ({ notes, handleDelete }) => {
  
  if (notes.length === 0) {
    return <p className="text-gray-500 text-center">No notes here</p>;
  }

  return (
    <div>
      {notes.map((note) => (
        <div
          className={`p-4 bg-white rounded-lg shadow-md border-l-4 text-left mt-2
              ${note.priority === "Low" ? "border-l-green-600" : ""}
              ${note.priority === "Medium" ? "border-l-yellow-300" : ""}
              ${note.priority === "High" ? "border-l-red-600" : ""}  
          `}
          key={note.id}
        >
          <h3 className="text-lg font-bold">{note.title}</h3>
          <p className="text-[12px] text-gray-600">
            <strong>Priority: </strong> {note.priority}
          </p>
          <p className="text-[12px] text-gray-600">
            <strong>Category: </strong> {note.category}
          </p>
          <p className="mt-2 text-sm text-gray-600">{note.description}</p>
          <p
            onClick={() => handleDelete(note.id)}
            className="mt-2 text-red-700 cursor-pointer"
          >
            Delete
          </p>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
