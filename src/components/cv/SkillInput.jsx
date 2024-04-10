import AddButton from './AddButton';
import DeleteButton from './DeleteButton';
import SaveButton from './SaveButton';
import EditButton from './EditButton';

function SkillInput({
  items,
  onChange,
  onClickAdd,
  onClickDelete,
  onClickSave,
  onClickEdit,
  isEditing,
}) {
    {if (isEditing) {
      return (
        <>
          <ul>
            {Object.keys(items).map((key) => {
              return (
                <li key={key}>
                  <input
                    type="text"
                    value={items[key]}
                    onChange={onChange}
                    data-key={key}
                  />
                  <DeleteButton
                    dataKey={key}
                    onClick={onClickDelete}
                  />
                </li>
              );
            })}
          </ul>
          <AddButton onClick={onClickAdd} />
          <SaveButton onClick={onClickSave} />
        </>
      );
    } else {
      return (
        <>
          <ul>
          {Object.keys(items).map((key) => {
              return (
                <li key={key}>{items[key]}</li>
              );
            })}
          </ul>
          <EditButton onClick={onClickEdit} />
        </>
      );
    }
  }
}

export default SkillInput;
