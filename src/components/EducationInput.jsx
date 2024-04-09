import MonthYearDropDown from "./MonthYearDropdown";

function EducationInput({ school, degree, onChange, isEditing}) {
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
            data-key='school'
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
            data-key='degree'
            required
          />
        </div>
        <MonthYearDropDown />
      </>
    );
  } else {
    return (
      <>
        <p>{school}</p>
        <p>{degree}</p>
      </>
    );
  }
}
  
export default EducationInput;
  