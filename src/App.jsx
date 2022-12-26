import { useCallback, useState } from 'react';
import './App.css';
import Channels from "./components/Channels";
import InputComp from "./components/InputComp";
import { mainChannels, mainTasks} from "./data/main";

function App() {
  const [channels, setChannels] = useState(mainChannels); // lets revist this later for reshuffling channels
  const [tasks, setTasks] = useState(mainTasks);
  const handleAddNewTask = (task, id) => {
    setTasks({
      ...tasks,
    [id]: task,
    });
    const localChannels = [...channels];
    localChannels[0].tasks = [...localChannels[0].tasks, id];
    setChannels(localChannels)
  };
  const handleOnDelete = useCallback((task) => {
    const localChannels = [...channels];
    const localTasks = {...tasks};
    const index = localChannels[task.currentChannel].tasks.findIndex((item) => item === task.id);
    localChannels[task.currentChannel].tasks.splice(index, 1);
    delete localTasks[task.id]; // this will usally be like settig isActive to false
    // localTasks[task.id].isActive = false;
    setChannels(localChannels);
    setTasks(localTasks);
  }, [tasks, channels]);
  return (
    <div className="main-container">
      <div className="create-container">
        <InputComp onCreate={handleAddNewTask} />
      </div>
      <div>
        <Channels channels={channels} handleOnDelete={handleOnDelete} tasks={tasks} />
      </div>
      
    </div>
  );
}

export default App;
