import MonthYearDropDown from './MonthYearDropdown';
import SaveButton from './SaveButton';
import EditButton from './EditButton';

function EducationInput({
  school,
  degree,
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
            data-key="school"
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
            data-key="degree"
            required
          />
        </div>
        <MonthYearDropDown />
        <SaveButton onClick={onClickSave} />
      </>
    );
  } else {
    return (
      <>
        <p>{school}</p>
        <p>{degree}</p>
        <EditButton onClick={onClickEdit} />
      </>
    );
  }
}

export default EducationInput;
