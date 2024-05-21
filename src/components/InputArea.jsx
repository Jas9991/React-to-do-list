import React from "react";

function InputArea(props) {
  const [userInput, setUserInput] = React.useState("");

  function handleChange(event) {
    const newValue = event.target.value;

    setUserInput(newValue);
  }

  return (
    <div className="form">
      <input
        onChange={handleChange}
        name="userText"
        type="text"
        autoComplete="off"
        value={userInput}
      />
      <button>
        <span
          onClick={() => {
            props.onAdd(userInput);
            setUserInput("");
          }}
        >
          Add
        </span>
      </button>
    </div>
  );
}
export default InputArea;
