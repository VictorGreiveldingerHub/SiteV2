import React from 'react';
import Repositories from '../Repositories';

const Repos = ({ loading, results }) => {
    const resultsJSX = results.map((repo) => {
        return <Repositories key={repo.id} {...repo} />;
      });
    
      return (
        <section loading={loading} className="repos-results">
          <div>{resultsJSX}</div>
        </section>
      );
};

export default Repos;