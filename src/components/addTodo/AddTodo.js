import Input from "../input/Input";
import Button from "../button/Button";
import toast from "react-hot-toast";

const AddTodo = ({
  title,
  setTitle,
  description,
  setDescription,
  todos,
  setTodos,
}) => {
  const date = new Date().getMinutes();

  const todoObj = {
    id: Math.random(),
    title,
    label: `${date} mins`,
    description,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!title) return toast.error("Title is required");
    if(!description) return toast.error("Title is description");
    setTodos([...todos, todoObj]);
    localStorage.setItem("data", JSON.stringify([todoObj, ...todos]));
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form_control">
          <label htmlFor="todo"></label>
          <Input
            placeholder="Add todo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            name="todo"
            id="todo"
          />
        </div>
        <div className="form_control">
          <label htmlFor="description"></label>
          <Input
            placeholder="Add Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            name="description"
            id="description"
          />
        </div>
        <Button text={"Add Card"} type="submit" />
      </form>
    </>
  );
};

export default AddTodo;
