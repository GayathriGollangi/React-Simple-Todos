// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, onDeleteUser} = props
  const {id, title} = todoDetails
  const onDelete = () => {
    onDeleteUser(id)
  }
  return (
    <li className="container">
      <p className="title">{title}</p>
      <div>
        <button type="button" className="del-btn" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}
export default TodoItem
