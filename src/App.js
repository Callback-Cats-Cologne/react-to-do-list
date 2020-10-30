import Input from "./components/Input";

function App() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  return (
    <div>
      <Input todos={tasks}></Input>
    </div>
  );
}

export default App;
