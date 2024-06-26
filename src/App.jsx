import { useState } from 'react';
import './styles/reset.css';
import './styles/App.css';
import InfoInput from './components/cv/InfoInput';
import InfoPreview from './components/cv/InfoPreview';
import EducationInput from './components/cv/EducationInput';
import EducationPreview from './components/cv/EducationPreview';
import SkillInput from './components/cv/SkillInput';
import SkillPreview from './components/cv/SkillPreview';
import ExperienceInput from './components/cv/ExperienceInput';
import ExperiencePreview from './components/cv/ExperiencePreview';
import SocialInput from './components/cv/SocialInput';
import SocialPreview from './components/cv/SocialPreview';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import EditButton from './components/buttons/EditButton';

function App() {
  const [infoInput, setInfoInput] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [educationInput, setEducationInput] = useState({
    school: '',
    degree: '',
    month: 'January',
    year: '2024',
  });

  const [skillInput, setSkillInput] = useState({});

  const [experienceInput, setExperienceInput] = useState({});

  const [socialInput, setSocialInput] = useState({
    linkedin: '',
    github: '',
  });

  const [infoPreview, setInfoPreview] = useState(infoInput);
  const [educationPreview, setEducationPreview] = useState(educationInput);
  const [skillPreview, setSkillPreview] = useState(skillInput);
  const [experiencePreview, setExperiencePreview] = useState(experienceInput);
  const [socialPreview, setSocialPreview] = useState(socialInput);

  const [infoStatus, setInfoStatus] = useState('editing');
  const [educationStatus, setEducationStatus] = useState('editing');
  const [skillStatus, setSkillStatus] = useState('editing');
  const [experienceStatus, setExperienceStatus] = useState('editing');
  const [socialStatus, setSocialStatus] = useState('editing');

  const [page, setPage] = useState('Info');

  function handleInfoChange(e) {
    const field = e.target.getAttribute('data-field');
    setInfoInput({ ...infoInput, [field]: e.target.value });
  }

  function handleEducationChange(e) {
    const field = e.target.getAttribute('data-field');
    setEducationInput({ ...educationInput, [field]: e.target.value });
  }
  
  function handleExperienceChange(e) {
    const key = e.target.getAttribute('data-key');
    const field = e.target.getAttribute('data-field');
    setExperienceInput({
      ...experienceInput,
      [key]: {
        ...experienceInput[key],
        [field]: e.target.value
      }
    });
  }

  function handleExperienceChangeMonthYear(e) {
    const key = e.target.getAttribute('data-key');
    const tempType = e.target.getAttribute('data-type');
    const tempField = e.target.getAttribute('data-field');
    const field = tempType + tempField.charAt(0).toUpperCase() + tempField.slice(1);
    setExperienceInput({
      ...experienceInput,
      [key]: {
        ...experienceInput[key],
        [field]: e.target.value
      }
    });
  }

  function handleSocialChange(e) {
    const field = e.target.getAttribute('data-field');
    setSocialInput({ ...socialInput, [field]: e.target.value })
  }

  function handleSaveInfo(e) {
    setInfoPreview({ ...infoInput });
    setInfoStatus('saved');
  }

  function handleSaveEducation(e) {
    setEducationPreview({ ...educationInput });
    setEducationStatus('saved');
  }

  function handleSaveSkill(e) {
    setSkillPreview({ ...skillInput });
    setSkillStatus('saved');
  }

  function handleSaveExperience(e) {
    setExperiencePreview({ ...experienceInput });
    setExperienceStatus('saved');
  }

  function handleSaveSocial(e) {
    setSocialPreview({ ...socialInput });
    setSocialStatus('saved');
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

  function handleEditSkill(e) {
    setPage('Skills');
    setSkillInput({ ...skillPreview });
    setSkillStatus('editing');
  }

  function handleEditExperience(e) {
    setPage('Experience');
    setExperienceInput({ ...experiencePreview });
    setExperienceStatus('editing');
  }

  function handleEditSocial(e) {
    setPage('Socials');
    setSocialInput({ ...socialPreview });
    setSocialStatus('editing');
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

  function handleAddExperience(e) {
    setExperienceInput({
      ...experienceInput,
      [crypto.randomUUID()]: {
        title: '',
        company: '',
        fromMonth: 'January',
        fromYear: '2024',
        toMonth: 'January',
        toYear: '2024',
      }
    })
  }

  function handleDeleteExperience(e) {
    const keyToExclude = e.target.getAttribute('data-key');
    let { [keyToExclude]: remove, ...rest } = experienceInput;
    setExperienceInput({...rest});
  }

  return (
    <>
      <main>
        <section className='input-panel'>
          <h2>Input</h2>
          <Navigation currentPage={page} onClick={handleNavigation} />
          <form onSubmit={(e) => e.preventDefault()}>
            {page === 'Info' && (
              <>
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
                <EducationInput
                  school={educationInput.school}
                  degree={educationInput.degree}
                  month={educationInput.month}
                  year={educationInput.year}
                  onChange={handleEducationChange}
                  onClickSave={handleSaveEducation}
                  onClickEdit={handleEditEducation}
                  isEditing={educationStatus === 'editing'}
                />
              </>
            )}
            {page === 'Skills' && (
              <>
              <SkillInput
                items={skillInput}
                onChange={handleSkillChange}
                onClickAdd={handleSkillAdd}
                onClickDelete={handleSkillDelete}
                onClickSave={handleSaveSkill}
                onClickEdit={handleEditSkill}
                isEditing={skillStatus === 'editing'}
              />
              </>
            )}
            {page === 'Experience' && (
              <>
              <ExperienceInput
                items={experienceInput}
                onChange={handleExperienceChange}
                onChangeMonthYear={handleExperienceChangeMonthYear}
                onClickSave={handleSaveExperience}
                onClickEdit={handleEditExperience}
                onClickAdd={handleAddExperience}
                onClickDelete={handleDeleteExperience}
                isEditing={experienceStatus === 'editing'}
              />
              </>
            )}
            {page === 'Socials' && (
              <>
              <SocialInput
                linkedin={socialInput.linkedin}
                github={socialInput.github}
                onChange={handleSocialChange}
                onClickSave={handleSaveSocial}
                onClickEdit={handleEditSocial}
                isEditing={socialStatus === 'editing'}
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
            <EditButton buttonText="Edit Info" onClick={handleEditInfo} />
          )}
          <SocialPreview
            linkedin={socialPreview.linkedin}
            github={socialPreview.github}
          />
          {socialStatus === 'saved' && (
            <EditButton buttonText="Edit Socials" onClick={handleEditSocial} />
          )}
          <EducationPreview
            school={educationPreview.school}
            degree={educationPreview.degree}
            month={educationPreview.month}
            year={educationPreview.year}
          />
          {educationStatus === 'saved' && (
            <EditButton buttonText="Edit Education" onClick={handleEditEducation} />
          )}
          <SkillPreview items={skillPreview} />
          {skillStatus === 'saved' && (
            <EditButton buttonText="Edit Skills" onClick={handleEditSkill} />
          )}
          <ExperiencePreview items={experiencePreview} />
          {experienceStatus === 'saved' && (
            <EditButton buttonText="Edit Experience" onClick={handleEditExperience} />
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
