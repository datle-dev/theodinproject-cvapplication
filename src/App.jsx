import { useState } from 'react';
import './styles/App.css';
import InfoInput from './components/InfoInput';
import InfoPreview from './components/InfoPreview';
import EducationInput from './components/EducationInput';
import EducationPreview from './components/EducationPreview';
import SkillInput from './components/SkillInput';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  const [infoInput, setInfoInput] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [educationInput, setEducationInput] = useState({
    school: '',
    degree: '',
  });

  const [skillInput, setSkillInput] = useState({
    [crypto.randomUUID()]: '',
  })

  const [infoPreview, setInfoPreview] = useState(infoInput);
  const [educationPreview, setEducationPreview] = useState(educationInput);

  const [infoStatus, setInfoStatus] = useState('editing');
  const [educationStatus, setEducationStatus] = useState('editing');

  const [page, setPage] = useState('Info');

  function handleInfoChange(e) {
    const key = e.target.getAttribute('data-key');
    setInfoInput({ ...infoInput, [key]: e.target.value });
  }

  function handleEducationChange(e) {
    const key = e.target.getAttribute('data-key');
    setEducationInput({ ...educationInput, [key]: e.target.value });
  }

  function handleSaveInfo(e) {
    setInfoPreview({ ...infoInput });
    setInfoStatus('saved');
  }

  function handleSaveEducation(e) {
    setEducationPreview({ ...educationInput });
    setEducationStatus('saved');
  }

  function handleEditInfo(e) {
    setPage('Info');
    setInfoInput({ ...infoPreview });
    setInfoStatus('editing');
  }

  function handleEditEducation(e) {
    setPage('Education');
    setEducationInput({ ...educationPreview });
    setEducationStatus('editing');
  }

  function handleNavigation(e) {
    const key = e.target.getAttribute('data-key');
    setPage(key);
  }

  function handleSkillChange(e) {
    const key = e.target.getAttribute('data-key');
    setSkillInput({...skillInput, [key]: e.target.value});
  }

  function handleSkillAdd(e) {
    setSkillInput({...skillInput, [crypto.randomUUID()]: ''});
  }

  function handleSkillDelete(e) {
    const keyToExclude = e.target.getAttribute('data-key');
    let { [keyToExclude]: remove, ...rest } = skillInput;
    setSkillInput({...rest});
  }

  return (
    <>
      <header>
        <Navigation onClick={handleNavigation} />
      </header>
      <main>
        <section className='input-panel'>
          <form onSubmit={(e) => e.preventDefault()}>
            <h2>Input</h2>
            {page === 'Info' && (
              <>
                <h3>Info</h3>
                <InfoInput
                  name={infoInput.name}
                  email={infoInput.email}
                  phone={infoInput.phone}
                  onChange={handleInfoChange}
                  onClickSave={handleSaveInfo}
                  onClickEdit={handleEditInfo}
                  isEditing={infoStatus === 'editing'}
                />
              </>
            )}
            {page === 'Education' && (
              <>
                <h3>Education</h3>
                <EducationInput
                  school={educationInput.school}
                  degree={educationInput.degree}
                  onChange={handleEducationChange}
                  onClickSave={handleSaveEducation}
                  onClickEdit={handleEditEducation}
                  isEditing={educationStatus === 'editing'}
                />
              </>
            )}
            {page === 'Skills' && (
              <>
              <h3>Skills</h3>
              <SkillInput
                items={skillInput}
                onChange={handleSkillChange}
                onClickAdd={handleSkillAdd}
                onClickDelete={handleSkillDelete}
              />
              </>
            )}
          </form>
        </section>
        <section className='preview-panel'>
          <h2>Preview</h2>
          <InfoPreview
            name={infoPreview.name}
            email={infoPreview.email}
            phone={infoPreview.phone}
          />
          {infoStatus === 'saved' && (
            <button type="button" onClick={handleEditInfo}>
              Edit Info
            </button>
          )}
          <EducationPreview
            school={educationPreview.school}
            degree={educationPreview.degree}
          />
          {educationStatus === 'saved' && (
            <button type="button" onClick={handleEditEducation}>
              Edit Education
            </button>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
