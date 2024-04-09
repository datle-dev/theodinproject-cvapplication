import AddButton from './AddButton';
import DeleteButton from './DeleteButton';

function SkillInput({ items, onChange, onClickAdd, onClickDelete }) {
  return (
    <>
      {Object.keys(items).map((key) => {
        return (
          <>
            <input
              key={key}
              type="text"
              value={items[key]}
              onChange={onChange}
              data-key={key}
            />
            <DeleteButton key={crypto.randomUUID()} dataKey={key} onClick={onClickDelete} />
          </>
        );
      })}
      <AddButton onClick={onClickAdd} />
    </>
  );
}

export default SkillInput;
