import MonthYearDropDown from '../MonthYearDropdown';
import AddButton from '../buttons/AddButton';
import DeleteButton from '../buttons/DeleteButton';
import SaveButton from '../buttons/SaveButton';
import EditButton from '../buttons/EditButton';

function ExperienceInput({ items, onChange, onClickSave, onClickEdit, onClickAdd, onClickDelete, isEditing }) {
  if (isEditing) {
    return (
      <>
      {Object.keys(items).map((key) => {
        return (
          <div key={key}>
            <div>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Cheese Master"
                onChange={onChange}
                value={items[key].title}
                data-key={key}
                data-field="title"
                required
              />
            </div>
            <div>
              <label htmlFor="company">Company</label>
              <input
                type="text"
                name="company"
                id="company"
                placeholder="Cheese Master"
                onChange={onChange}
                value={items[key].company}
                data-key={key}
                data-field="company"
                required
              />
            </div>
            <div>
              <p>From</p>
              <MonthYearDropDown
                selectedMonth={items[key].fromMonth}
                selectedYear={items[key].fromYear}
              />
            </div>
            <div>
              <p>To</p>
              <MonthYearDropDown
                selectedMonth={items[key].toMonth}
                selectedYear={items[key].toYear}
              />
            </div>
            <DeleteButton dataKey={key} onClick={onClickDelete} />
          </div>
        )
      })}
      <AddButton onClick={onClickAdd} />
      <SaveButton onClick={onClickSave} />
      </>
    )
  } else {
    return (
      <>
      {Object.keys(items).map((key) => {
        return (
          <div key={key}>
            <p>{items[key].title}</p>
            <p>{items[key].company}</p>
          </div>
        )
      })}
      <EditButton onClick={onClickEdit}/>
      </>
    )
  }
}

export default ExperienceInput;
