import React from 'react';


const Search = ({
    loading,
    value,
    handleChange,
    handleSubmit,
    message,
  }) => {
    return (
        <>
        <form onSubmit={handleSubmit} className="search-form">
        <section className="search-section">
          <input
            className="search-input"
            loading={loading}
            placeholder="Recherche..."
            value={value} // forçage de l'affichage de la valeur
            onChange={handleChange} // possibilité de modifier la valeur
          />
        </section>
      </form>
      <div className="search-result">Votre recherche a donnée <span className="number-result">{message}</span> résultats</div>
      </>
    );
};

export default Search;