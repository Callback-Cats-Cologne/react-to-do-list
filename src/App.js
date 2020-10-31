import Input from "./components/Form";
import gif from "./giphy.webp";

function App() {
  return (
    <main>
      <img className="gif" src={gif} alt="todo" />
      <h1>Machens Ma'</h1>
      <Input></Input>
    </main>
  );
}

export default App;
