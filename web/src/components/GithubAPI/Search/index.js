import React from 'react';

const Search = ({
    value,
    handleChange,
    handleSubmit,
    message,
  }) => {
    let result = 'résultat';
    if (message >= 1) {
      result += 's';
    }
    return (
        <>
        <form onSubmit={handleSubmit} className="search-form">
        <section className="search-section">
          <input
            className="search-input"
            placeholder="Recherche React par exemple"
            value={value} // forçage de l'affichage de la valeur
            onChange={handleChange} // possibilité de modifier la valeur
          />
        </section>
      </form>
      <div className="search-result">Votre recherche a donnée <span className="number-result">{message}</span> {result}</div>
      </>
    );
};

export default Search;