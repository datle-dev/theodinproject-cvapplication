function DeleteButton({ dataKey, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      data-key={dataKey}
    >
      X
    </button>
  );
}

export default DeleteButton;