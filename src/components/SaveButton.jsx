function SaveButton({ status, onClick }) {
  let isDisabled;
  if (status !== 'saved') {
    isDisabled = false;
  } else {
    isDisabled = true;
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isDisabled}
    >
      Save
    </button>
  );
}

export default SaveButton;
