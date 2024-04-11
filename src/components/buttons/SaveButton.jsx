import '../../styles/SaveButton.css';

function SaveButton({ onClick }) {
  return (
    <button className="save-button" type="button" onClick={onClick}>
      Save
    </button>
  );
}

export default SaveButton;
