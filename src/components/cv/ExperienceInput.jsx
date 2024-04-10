import MonthYearDropDown from '../MonthYearDropdown';
import AddButton from '../buttons/AddButton';
import DeleteButton from '../buttons/DeleteButton';
import SaveButton from '../buttons/SaveButton';
import EditButton from '../buttons/EditButton';

function ExperienceInput({ items, onChange, onChangeMonthYear, onClickSave, onClickEdit, onClickAdd, onClickDelete, isEditing }) {
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
                dataKey={key}
                dataType={'from'}
                onChange={onChangeMonthYear}
              />
            </div>
            <div>
              <p>To</p>
              <MonthYearDropDown
                selectedMonth={items[key].toMonth}
                selectedYear={items[key].toYear}
                dataKey={key}
                dataType={'to'}
                onChange={onChangeMonthYear}
              />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                placeholder="A description of cheese"
                onChange={onChange}
                value={items[key].description}
                data-key={key}
                data-field="description"
                required
              >
              </textarea>
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
            <p>{items[key].fromMonth}</p>
            <p>{items[key].fromYear}</p>
            <p>{items[key].toMonth}</p>
            <p>{items[key].toYear}</p>
            <p>{items[key].description}</p>
          </div>
        )
      })}
      <EditButton onClick={onClickEdit}/>
      </>
    )
  }
}

export default ExperienceInput;
