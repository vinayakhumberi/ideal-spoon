import "./style.css";

const Task = ({task, onDelete}) => {
    const handleOnDelete = () => {
      // call the parent and pass the id
      onDelete(task);
    };
    return (
      <div className='task-container'>
        <div>
          {task.text}
        </div>
        <div>
          <button>{"<"}</button>
          <button>{">"}</button>
          <button
            onClick={handleOnDelete}
          >
            {"D"}
          </button>
        </div>
      </div>
    )
  };

  export default Task;