import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import githubLogo from '../../assets/images/GitHub-Mark.png';
import { cleanRepos } from '../../utils/api';
import './styles.scss'

import Search from './Search';

import Repos from './Repos';

const GITHUB_API_URL = 'https://api.github.com/search/repositories?q=';
const DEFAULT_QUERY = 'react';

const GithubAPI = () => {

    const reducer = (state, action) => {
        // eslint-disable-next-line default-case
        switch (action.type) {
          case 'UPDATE_QUERY': {
            return { ...state, query: action.payload };
          }
          case 'FETCH_REPOS': {
            return { ...state, loading: true };
          }
          case 'REPOS_RECEIVED': {
            return {
              ...state,
              repos: cleanRepos(action.payload.repos),
              message: action.payload.message,
            };
          }
        }
    };
    
    // Utilisation de useReducer pour gérer l'état de App
    const [state, dispatch] = useReducer(reducer, {
        // Liste des repos venant de l'API
        repos: [],
        // Chargement asynchrone des résultats => feedback visuel
        query: DEFAULT_QUERY,
        // message pour l'utilisateur
        message: '',
    });
    
    // Effet de bord : récupération de repos depuis l'API GitHub.
    const fetchRepos = () => {
        // 1. fetch repos
        const promise = axios.get(GITHUB_API_URL + state.query);
        promise.then((response) => {
          console.log(response);
          // dispatch({ type: 'UPDATE_REPOS', payload: response.data.items });
          // dispatch({ type: 'DISPLAY_MESSAGE', payload: response.data.total_count });
          dispatch({ type: 'REPOS_RECEIVED', payload: {
            repos: response.data.items,
            message: response.data.total_count,
          } });
        });
    };
    
    const handleChange = (evt) => {
        dispatch({ type: 'UPDATE_QUERY', payload: evt.target.value });
    };
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch({ type: 'FETCH_REPOS' });
        fetchRepos();
    };
    
    useEffect(fetchRepos, []);

    return (
        <div className="github-section">
            <img alt="GitHub Logo" src={githubLogo} className="github-image"/>
            <Search
                value={state.query}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                message={state.message}
            />
            <Repos results={state.repos} />
        </div>
    );
};

export default GithubAPI;