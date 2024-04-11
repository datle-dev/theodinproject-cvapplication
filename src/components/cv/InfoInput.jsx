import SaveButton from '../buttons/SaveButton';
import EditButton from '../buttons/EditButton';

function InfoInput({
  name,
  email,
  phone,
  onChange,
  onClickSave,
  onClickEdit,
  isEditing,
}) {
  if (isEditing) {
    return (
      <>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Cheese McCheese"
            onChange={onChange}
            value={name}
            data-field="name"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="cheese@cheese.com"
            onChange={onChange}
            value={email}
            data-field="email"
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="1234567890"
            pattern="[0-9]{10}"
            onChange={onChange}
            value={phone}
            data-field="phone"
            required
          />
        </div>
        <SaveButton onClick={onClickSave} />
      </>
    );
  } else {
    return (
      <>
        <p>{name}</p>
        <p>{email}</p>
        <p>{phone}</p>
        <EditButton buttonText="Edit" onClick={onClickEdit} />
      </>
    );
  }
}

export default InfoInput;
