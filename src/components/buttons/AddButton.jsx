import '../../styles/AddButton.css';
import AddIcon from '../icons/AddIcon';

function AddButton({ onClick }) {
  return (
    <button className="add-button" type="button" onClick={onClick}>
      <AddIcon />
    </button>
  );
}

export default AddButton;
