import SaveButton from '../buttons/SaveButton';
import EditButton from '../buttons/EditButton';

function SocialInput({ linkedin, github, onChange, onClickSave, onClickEdit, isEditing }) {
  if (isEditing) {
    return (
      <div>
        <div>
          <label htmlFor="linkedin">LinkedIn</label>
          <input
            name="linkedin"
            id="linkedin"
            type="text"
            value={linkedin}
            onChange={onChange}
            data-field="linkedin"
          />
        </div>
        <div>
          <label htmlFor="github">Github</label>
          <input
            name="github"
            id="github"
            type="text"
            value={github}
            onChange={onChange}
            data-field="github"
          />
        </div>
        <SaveButton onClick={onClickSave} />
      </div>
    );
  } else {
    return (
      <>
        <div>
          <a href={'https://www.linkedin.com/in/' + linkedin}>{linkedin}</a>
        </div>
        <div>
          <a href={'https://www.github.com/' + github}>{github}</a>
        </div>
        <div>
          <EditButton buttonText="Edit" onClick={onClickEdit} />
        </div>
      </>
    );
  }
}

export default SocialInput;
