import MonthYearDropDown from '../MonthYearDropdown';
import SaveButton from '../buttons/SaveButton';
import EditButton from '../buttons/EditButton';

function EducationInput({
  school,
  degree,
  month,
  year,
  onChange,
  onClickSave,
  onClickEdit,
  isEditing,
}) {
  if (isEditing) {
    return (
      <>
        <div>
          <label htmlFor="school">School</label>
          <input
            type="text"
            name="school"
            id="school"
            placeholder="Cheesington Cheesiversity"
            onChange={onChange}
            value={school}
            data-field="school"
            required
          />
        </div>
        <div>
          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            name="degree"
            id="degree"
            placeholder="Cheeser's of Cheese Arts"
            onChange={onChange}
            value={degree}
            data-field="degree"
            required
          />
        </div>
        <MonthYearDropDown selectedMonth={month} selectedYear={year} onChange={onChange}/>
        <SaveButton onClick={onClickSave} />
      </>
    );
  } else {
    return (
      <>
        <p>{school}</p>
        <p>{degree}</p>
        <p>{month}</p>
        <p>{year}</p>
        <EditButton onClick={onClickEdit} />
      </>
    );
  }
}

export default EducationInput;
