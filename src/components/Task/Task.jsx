import { formatDistanceToNow } from 'date-fns'
import PropTypes from 'prop-types'
import './Task.css'

function Task(props) {
  const { task, handleDeleteTask, handleCompleteTask, isSelected, handleEditTask } = props
  const setTimeCreatedAgo = (date) => formatDistanceToNow(date, { addSuffix: true, includeSeconds: true })

  Task.defaultProps = {
    task: {},
    handleDeleteTask: () => {},
    handleCompleteTask: () => {},
    handleEditTask: () => {},
  }
  Task.propTypes = {
    task: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.object]),
    isSelected: PropTypes.string.isRequired,
    handleDeleteTask: PropTypes.func,
    handleCompleteTask: PropTypes.func,
    handleEditTask: PropTypes.func,
  }

  const taskClass = () => {
    if (!task.isCompleted && isSelected === 'Completed') {
      return 'edit'
    } else if (task.isCompleted && isSelected === 'Active') {
      return 'edit'
    } else {
      return 'view'
    }
  }

  return (
    <div>
      <div className={taskClass()}>
        <input className="toggle" type="checkbox" onClick={() => handleCompleteTask(task.id)} id={task.id} />
        <label htmlFor={task.id}>
          <span className="description">{task.value}</span>
          <div className="container-timer">
            <button type="button" className="icon icon-play" />
            <button type="button" className="icon icon-pause" />
            <div className="time-text">12:25</div>
          </div>
          <span className="created">created {setTimeCreatedAgo(task.whenCreated)}</span>
        </label>
        <button
          type="button"
          className="icon icon-edit"
          onClick={(e) => handleEditTask(e, task.id, task)}
          id={task.id}
        />
        <button type="button" className="icon icon-destroy" onClick={() => handleDeleteTask(task.id)} />
      </div>
    </div>
  )
}

export default Task
