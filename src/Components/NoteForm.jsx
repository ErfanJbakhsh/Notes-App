import { useState } from "react";

const NoteForm = ({ notes, setNotes }) => {
  
  //Default formData
  const [formData, setFormData] = useState({
    title: "",
    priority: "High",
    category: "Work",
    description: "",
  });

  const [FormVisible, setFormVisible] = useState(false);

  //Adding everything on inputs to formData
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //Adding all formDatas to notes (which passed by a prop)
  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = { id: Date.now(), ...formData };
    setNotes([newNote, ...notes]);

    //Setting formData to default
    setFormData({
      title: "",
      priority: "High",
      category: "Work",
      description: "",
    });
  };

  return (
    <>
      <button
        className="w-full bg-gray-100 p-1 cursor-pointer text-purple-800 border border-purple-300 rounded-lg mb-4 transition hover:bg-purple-200"
        onClick={() => {
          setFormVisible(!FormVisible);
        }}
      >
        {FormVisible ? "Hide Form" : "Add New Note"}
      </button>
      {FormVisible && (
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block font-semibold mb-2 text-left text-purple-500 text-[14px]"
            >
              Title
            </label>
            <input
              name="title"
              type="text"
              className="w-full p-1 border rounded-lg"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="priority"
              className="block font-semibold mb-2 text-left text-purple-500  text-[14px]"
            >
              priority
            </label>
            <select
              name="priority"
              type="text"
              className="w-full p-1 border rounded-lg"
              value={formData.priority}
              onChange={handleChange}
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block font-semibold mb-2 text-left text-purple-500  text-[14px]"
            >
              category
            </label>
            <select
              name="category"
              type="text"
              className="w-full p-1 border rounded-lg"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
              <option value="Ideas">Ideas</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block font-semibold mb-2 text-left text-purple-500  text-[14px]"
            >
              description
            </label>
            <textarea
              name="description"
              type="text"
              className="w-full p-1 border rounded-lg"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <button className="w-full bg-purple-500 p-2 cursor-pointer text-white rounded-lg transition hover:bg-purple-600">
            Add note
          </button>
        </form>
      )}
    </>
  );
};

export default NoteForm;
