import { useEffect, useState } from "react";
import Board from "react-trello";
import AddTodo from "./components/addTodo/AddTodo";
import { Toaster } from "react-hot-toast";
import Color from "./components/color/Color";
import Button from "./components/button/Button";

function App() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);
  const [description, setDescription] = useState("");
  const [myData, setMyData] = useState([]);
  const [showTheme, setShowTheme] = useState(false);
  const [color, setColor] = useState("fff");
  console.log(myData?.length === 0 ? true: false)
  const data = {
    lanes: [
      {
        id: "PLANNED",
        title: "Planned Tasks",
        label: `${!myData ? "You don't have any task yet" : myData?.length} Tasks`,
        style: {
          width: 280,
        },
        cards: myData ? myData : [{}],
      },
      {
        id: "COMPLETED",
        title: "Completed Task",
        style: {
          width: 280,
        },
        label: "2/5",
        cards: [
          {
            id: "Completed1",
            title: "Practice Meditation",
            label: "15 mins",
            description: "Use Headspace app",
          },
          {
            id: "Completed2",
            title: "Maintain Daily Journal",
            label: "15 mins",
            description: "Use Spreadsheet for now",
          },
        ],
      },
      {
        id: "REPEAT",
        title: "Repeat Task",
        style: {
          width: 280,
        },
        label: "1/1",
        cards: [
          {
            id: "Repeat1",
            title: "Morning Jog",
            label: "30 mins",
            description: "Track using fitbit",
          },
        ],
      },
    ],
  };

  useEffect(() => {
    setMyData(JSON.parse(localStorage.getItem("data")));
  }, [title, description, todos]);

  useEffect(() => {
    if(color) document.body.style.background = color;
    if(color) document.querySelector(".RKnrV").style.backgroundColor = color;

  }, [color]);


  return (
    <>
      <Toaster />
      <div className="header">
        <h1>Welcome to learner world</h1>
        <AddTodo
          title={title}
          setTitle={setTitle}
          todos={todos}
          setTodos={setTodos}
          description={description}
          setDescription={setDescription}
        />
      </div>

      <Button
        onClick={() => setShowTheme(!showTheme)}
        text={"Theme"}
        className="change_bg"
      />
      {/* Theme */}
      <div className={`${showTheme ? `change_theme active` : "change_theme"}`}>
        <Color setColor={setColor} color="blue" />
        <Color setColor={setColor} color="yellow" />
        <Color setColor={setColor} color="aqua" />
        <Color setColor={setColor} color="#3AB0FF" />
        <Color setColor={setColor} color="#3B44F6" />
        <Color setColor={setColor} color="#06283D" />
        <Color setColor={setColor} color="#1F4690" />
        <Color setColor={setColor} color="#1363DF" />
      </div>
      <Board data={data} draggable />
    </>
  );
}

export default App;
