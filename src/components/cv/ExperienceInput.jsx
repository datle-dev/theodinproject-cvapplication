import '../../styles/ExperienceInput.css';
import MonthYearDropDown from '../MonthYearDropdown';
import AddButton from '../buttons/AddButton';
import DeleteButton from '../buttons/DeleteButton';
import SaveButton from '../buttons/SaveButton';
import EditButton from '../buttons/EditButton';

function ExperienceInput({ items, onChange, onChangeMonthYear, onClickSave, onClickEdit, onClickAdd, onClickDelete, isEditing }) {
  if (isEditing) {
    return (
      <>
      <div className="form-top-row">
        <h3>Experience</h3>
        <SaveButton onClick={onClickSave} />
      </div>
      {Object.keys(items).map((key) => {
        return (
          <div key={key} className="experience-entry">
            <div className="title-company-row">
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
            </div>
            <div className="from-to-date-row">
              <div>
                <MonthYearDropDown
                  legend='From'
                  selectedMonth={items[key].fromMonth}
                  selectedYear={items[key].fromYear}
                  dataKey={key}
                  dataType={'from'}
                  onChange={onChangeMonthYear}
                />
              </div>
              <div>
                <MonthYearDropDown
                  legend='To'
                  selectedMonth={items[key].toMonth}
                  selectedYear={items[key].toYear}
                  dataKey={key}
                  dataType={'to'}
                  onChange={onChangeMonthYear}
                />
              </div>
            </div>
            <div className="description-row">
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
      <EditButton buttonText="Edit" onClick={onClickEdit}/>
      </>
    )
  }
}

export default ExperienceInput;
