import { useRef } from "react";
import "./style.css";

const InputComp = ({onCreate}) => {
    const inputRef = useRef();
    const handleOnCreatetask = () => {
      const newTaskText = inputRef.current.value;
      const id = + new Date();
      const task = {
        id: id,
        currentChannel: 0,
        text: newTaskText,
        isActive: true,
      };
      onCreate(task, id);
      inputRef.current.value = "";
    };
    return (
      <div>
        <input type="text" ref={inputRef} />
        <button onClick={handleOnCreatetask}>Create Task</button>
      </div>
    )
  };

  
  export default InputComp;