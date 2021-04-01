import React from 'react';
import Repositories from '../Repositories';
import './styles.scss';

const Repos = ({ results }) => {
    const resultsJSX = results.map((repo) => {
      return <Repositories key={repo.id} {...repo} />;
    });
    
    return (
      <section className="repos-results">
        <div>{resultsJSX}</div>
      </section>
      );
};

export default Repos;