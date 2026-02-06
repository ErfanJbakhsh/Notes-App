import { useState } from "react";
import { useForm } from "react-hook-form";

const NoteForm = ({ notes, setNotes }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      title: "",
      priority: "High",
      category: "Work",
      description: "",
    },
  });

  const [FormVisible, setFormVisible] = useState(false);

  const onSubmit = (data) => {
    const newNote = { id: Date.now(), ...data };
    setNotes([newNote, ...notes]);
    reset();
  };

  return (
    <>
      <button
        className="w-full bg-gray-100 p-1 cursor-pointer text-purple-800 border border-purple-300 rounded-lg mb-4 transition-all duration-200 hover:bg-purple-200"
        onClick={() => {
          setFormVisible(!FormVisible);
        }}
      >
        {FormVisible ? "Hide Form" : "Add New Note"}
      </button>

      {/* Animation Container */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          FormVisible ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="mb-6">
          {/* Title Input */}
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block font-semibold text-left text-purple-500 text-[14px] mb-1"
            >
              Title
            </label>
            <input
              type="text"
              className={`w-full p-2 border rounded-lg transition-all duration-200
                ${
                  errors.title
                    ? "border-red-500 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200"
                    : "border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                }`}
              {...register("title", { required: true, minLength: 3 })}
            />
            {errors.title?.type === "required" && (
              <p className="text-red-600 text-left text-sm mt-1 transition-all duration-300 ease-in-out animate-fadeIn">
                This field is empty...
              </p>
            )}
            {errors.title?.type === "minLength" && (
              <p className="text-red-600 text-left text-sm mt-1 transition-all duration-300 ease-in-out animate-fadeIn">
                Your title must contain at least 3 characters...
              </p>
            )}
          </div>

          {/* Priority Select */}
          <div className="mb-4">
            <label
              htmlFor="priority"
              className="block font-semibold text-left text-purple-500 text-[14px] mb-1"
            >
              Priority
            </label>
            <select
              className="w-full p-2 border border-gray-300 rounded-lg transition-all duration-200 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
              {...register("priority")}
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          {/* Category Select */}
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block font-semibold text-left text-purple-500 text-[14px] mb-1"
            >
              Category
            </label>
            <select
              className="w-full p-2 border border-gray-300 rounded-lg transition-all duration-200 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
              {...register("category")}
            >
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
              <option value="Ideas">Ideas</option>
            </select>
          </div>

          {/* Description Textarea */}
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block font-semibold text-left text-purple-500 text-[14px] mb-1"
            >
              Description
            </label>
            <textarea
              className={`w-full p-2 border rounded-lg transition-all duration-200 min-h-[80px] resize-y
                ${
                  errors.description
                    ? "border-red-500 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200"
                    : "border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                }`}
              {...register("description", { required: true, minLength: 3 })}
            ></textarea>
            {errors.description?.type === "required" && (
              <p className="text-red-600 text-left text-sm mt-1 transition-all duration-300 ease-in-out animate-fadeIn">
                This field is empty...
              </p>
            )}
            {errors.description?.type === "minLength" && (
              <p className="text-red-600 text-left text-sm mt-1 transition-all duration-300 ease-in-out animate-fadeIn">
                Your description must contain at least 3 characters...
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-500 p-2 cursor-pointer text-white rounded-lg transition-all duration-200 hover:bg-purple-600 hover:shadow-lg active:scale-95"
          >
            Add note
          </button>
        </form>
      </div>
    </>
  );
};

export default NoteForm;
