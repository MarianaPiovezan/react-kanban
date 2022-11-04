import "./tasklist.css";
import { TaskItem } from "../tasksitems/taskitem";
import plusIcon from "../../image/plus-icon.svg";
import PropTypes from 'prop-types';

export function TaskList({
  title,
  taskState,
  onAddTask,
  tasks,
  onTaskUpdate,
  onDeleteTask,
}) {
  const addTask = () => {
    onAddTask("Nova tarefa", taskState);
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              taskState={task.state}
              onTaskUpdate={onTaskUpdate}
              onDeleteTask={onDeleteTask}
            />
          );
        })}
         {tasks.length === 0 && <div className="empty-list"> Lista vazia</div>}
         <button className="btn" onClick={addTask}>
        <img src={plusIcon} alt= ""/>
        ADICIONAR TAREFA
      </button>
      </div>  
    </div>
  );
}


TaskList.propTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
  onTaskUpdate: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired
};