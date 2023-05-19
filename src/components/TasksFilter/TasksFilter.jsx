import PropTypes from 'prop-types'
import './TasksFilter.css'

function TasksFilter(props) {
  const { handleFilterOnClick, isSelected, filterValue } = props

  TasksFilter.defaultProps = {
    filterValue: {},
    handleFilterOnClick: () => {},
  }
  TasksFilter.propTypes = {
    filterValue: PropTypes.objectOf(PropTypes.string),
    handleFilterOnClick: PropTypes.func,
    isSelected: PropTypes.string.isRequired,
  }
  return (
    <button type="button" onClick={handleFilterOnClick} className={isSelected === filterValue.value ? 'selected' : ''}>
      {filterValue.value}
    </button>
  )
}

export default TasksFilter
