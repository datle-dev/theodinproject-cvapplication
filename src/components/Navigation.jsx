import '../styles/Navigation.css';
// import infoIcon from '../assets/ph--user.svg';
import InfoIcon from './icons/InfoIcon';
import EducationIcon from './icons/EducationIcon';
import SkillsIcon from './icons/SkillsIcon';
import ExperienceIcon from './icons/ExperienceIcon';
import SocialsIcon from './icons/SocialsIcon';

function Navigation({ currentPage, onClick }) {
  const pages = [
    'Info',
    'Education',
    'Skills',
    'Experience',
    'Socials',
  ];

  const icons = {
    'Info': <InfoIcon />,
    'Education': <EducationIcon />,
    'Skills': <SkillsIcon />,
    'Experience': <ExperienceIcon />,
    'Socials': <SocialsIcon />,
  }


  return (
    <nav>
      {pages.map((page) => {
        if (page === currentPage) {
          return (
            <button
              key={page}
              type="button"
              onClick={onClick}
              data-key={page}
              className='active-page'
            >
              {icons[page]}
              {page}
            </button>
          );
        } else {
          return (
            <button
              key={page}
              type="button"
              onClick={onClick}
              data-key={page}
            >
              {icons[page]}
              {page}
            </button>
          );
        }
      })}
    </nav>
  );
}

export default Navigation;
