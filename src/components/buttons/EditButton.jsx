import '../../styles/EditButton.css';

function EditButton({ buttonText, onClick }) {
  return (
    <button className="edit-button" type="button" onClick={onClick}>
      {buttonText}
    </button>
  );
}

export default EditButton;
