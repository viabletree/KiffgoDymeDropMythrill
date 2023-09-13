import { ROUTES } from '../constants';

const scrollToTeamSec = () => {
  const elem = document.getElementById('team');
  if (elem) {
    window.scrollTo({ top: elem.offsetTop, behavior: 'smooth' });
  } else {
    window.location.href = `${ROUTES.PRINCIPLES}#team`;
  }
};

export { scrollToTeamSec };
