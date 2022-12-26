import Task from "../Task";
import "./style.css";

const Channels = ({
    channels,
    handleOnDelete,
    tasks,
}) => {
    return (
        <div className="channel-container">
        {    channels.map((channel) => (
                <div className='channel-container__col'>
                <div className='card'>
                    <div className='card__title'>{channel.name}</div>
                    <div className='card__contents'>
                    {channel.tasks.map((task) =>  <Task
                        task={tasks[[task]]}
                        onDelete={handleOnDelete}
                    />)}
                    </div>
                </div>
                </div>
            ))}
        </div>
    )
};

export default Channels;