import "./input.css";

export default function Input() {
  const submit = (event) => {
    alert("ACHTUNG ");
    event.preventDefault();
  };

  return (
    <form className="form" onSubmit={submit}>
      <input className="inputField" />
      <button>🐮</button>
    </form>
  );
}
