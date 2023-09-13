import { ROUTES } from '../constants';


const scrollToContactForm = () => {
 const elem = document.getElementById('contactForm');
    if (elem) {

        window.scrollTo({ top: elem.offsetTop, behavior: 'smooth' });
    
    } else {
      window.location.href = `${ROUTES.HOME  }#contactForm`;
    }
};

export { scrollToContactForm };
