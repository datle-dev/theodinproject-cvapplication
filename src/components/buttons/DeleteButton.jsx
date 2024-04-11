import '../../styles/DeleteButton.css';
import DeleteIcon from '../icons/DeleteIcon';

function DeleteButton({ dataKey, onClick }) {
  return (
    <button
      className="delete-button"
      type="button"
      onClick={onClick}
      data-key={dataKey}
    >
      <DeleteIcon />
    </button>
  );
}

export default DeleteButton;