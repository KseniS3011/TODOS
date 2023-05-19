import PropTypes from 'prop-types'

import TasksFilter from '../TasksFilter'
import './Footer.css'

function Footer(props) {
  const { filters, isSelected, handleFilterOnClick, activeTasks, handleDeleteCompleteTasks } = props

  Footer.defaultProps = {
    filters: [],
    handleDeleteCompleteTasks: () => {},
  }
  Footer.propTypes = {
    filters: PropTypes.arrayOf(PropTypes.object),
    handleDeleteCompleteTasks: PropTypes.func,
  }

  return (
    <footer className="footer">
      <span className="todo-count">{activeTasks} items left</span>
      <ul className="filters">
        {filters.map((filter) => {
          const { id, ...filterValue } = filter
          return (
            <li key={id}>
              <TasksFilter
                handleFilterOnClick={handleFilterOnClick}
                filterValue={filterValue}
                isSelected={isSelected}
              />
            </li>
          )
        })}
      </ul>
      <button type="button" className="clear-completed" onClick={handleDeleteCompleteTasks}>
        Clear completed
      </button>
    </footer>
  )
}

export default Footer
