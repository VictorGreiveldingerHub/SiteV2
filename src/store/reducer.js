const initialState = {
  name: 'Victor Greiveldinger',
  displayMenu: false,
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
      url: '/about',
      identification: 'About',
      className:'about',
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
    case 'DISPLAY_MENU': {
      return {
        ...state,
        displayMenu: !state.displayMenu
      }
    }
    default: {
      return state;
    }
  }
};
