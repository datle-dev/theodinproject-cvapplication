import AddButton from './AddButton';

function SkillInput({ items, onChange, onClickAdd }) {
  return (
    <>
      {Object.keys(items).map((key) => {
        return (
          <input
            key={key}
            type="text"
            value={items[key]}
            onChange={onChange}
            data-key={key}
          />
        );
      })}
      <AddButton onClick={onClickAdd} />
    </>
  );
}

export default SkillInput;
