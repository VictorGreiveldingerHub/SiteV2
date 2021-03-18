import { randomHexColor } from '../utils/random';

const initialState = {
  name: 'Victor Greiveldinger',
  displayMenu: false,
  rectangleValue: true,
  data: null,
  firstColor: '#e367a4',
  lastColor: '#48b1f3',
  direction: '90deg',
  nbColors: 0,
  navigation: [
    {
      id: 1,
      url: '/',
      identification: 'Home',
      className:'home',
    },
    {
      id: 2,
      url: '/profil',
      identification: 'Profil',
      className:'profil',
    },
    {
      id: 3,
      url: '/skills',
      identification: 'Skills',
      className:'skills',
    },
    {
      id: 4,
      url: '/works',
      identification: 'Works',
      className:'works',
    },
    {
      id: 5,
      url: '/contact',
      identification: 'Contact',
      className:'contact',
    },
  ],
  socialMedias: [
    {
      id: 1,
      contain: 'Github',
      className: 'github-link',
      url: 'https://github.com/VictorGreiveldingerHub',
    },
    {
      id: 2,
      contain: 'Linkedin',
      className: 'linkedin-link',
      url: 'https://www.linkedin.com/in/victorgreiveldinger/',
    },
  ],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    // MENU ACCEUIL 
    case 'DISPLAY_MENU': {
      return {
        ...state,
        displayMenu: !state.displayMenu
      }
    }
    case 'CLOSE_MENU': {
      return {
        ...state,
        displayMenu: false,
      }
    }
    case 'HIDE_RECTANGLE': {
      return {
        ...state,
        rectangleValue: false,
      }
    }
    case 'RANDOM_FIRST': {
      return {
        ...state,
        firstColor: randomHexColor(),
        nbColors: state.nbColors + 1,
      }
    }
    case 'RANDOM_LAST': {
      return {
        ...state,
        lastColor: randomHexColor(),
        nbColors: state.nbColors + 1,
      }
    }
    default: {
      return state;
    }
  }
};
