function DeleteButton({ key, dataKey, onClick }) {
  return (
    <button
      key={key}
      type="button"
      onClick={onClick}
      data-key={dataKey}
    >
      X
    </button>
  );
}

export default DeleteButton;