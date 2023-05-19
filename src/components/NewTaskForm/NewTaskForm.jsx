import PropTypes from 'prop-types'
import './NewTaskForm.css'

function NewTaskForm(props) {
  const { handleSubmit, handleInputChange, inputValue } = props

  NewTaskForm.defaultProps = {
    handleSubmit: () => {},
    handleInputChange: () => {},
    inputValue: '',
  }
  NewTaskForm.propTypes = {
    inputValue: PropTypes.string,
    handleInputChange: PropTypes.func,
    handleSubmit: PropTypes.func,
  }

  return (
    <form onSubmit={handleSubmit} id="newTaskForm">
      <input
        id="newTaskFormInput"
        onChange={handleInputChange}
        value={inputValue}
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
      />
    </form>
  )
}

export default NewTaskForm
