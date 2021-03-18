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
        <form onSubmit={handleSubmit}>
        <section>
          <input
            loading={loading}
            placeholder="Recherche..."
            value={value} // forçage de l'affichage de la valeur
            onChange={handleChange} // possibilité de modifier la valeur
          />
        </section>
      </form>
      <div>Votre recherche a donnée {message} résultats</div>
      </>
    );
};

export default Search;