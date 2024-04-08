import { useState } from 'react';
import '../styles/GeneralInfo.css';

export default function GeneralInfo() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  return (
    <div>
      <form>
        <div>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            placeholder="Cheese"
            onChange={handleFirstNameChange}
            value={firstName}
            required
          />
        </div>
        <div>
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            name="last-name"
            id="last-name"
            placeholder="McCheese"
            onChange={handleLastNameChange}
            value={lastName}
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
            onChange={handleEmailChange}
            value={email}
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
            onChange={handlePhoneChange}
            value={phone}
            required
          />
        </div>
      </form>
    </div>
  );
}
