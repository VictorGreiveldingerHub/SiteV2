import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Repositories = ({ image, title, orga, description }) => {
  return (
    <div className="repositories-container">
        <img className="img-repos" src={image} />
        <div className="content-repos">
            <h3 className="title-repos">{title}</h3>
            <div className="date-repos">
                <span className="date">{orga}</span>
            </div>
            <div className="description-repos">{description}</div>
        </div>
    </div>
  );
};

Repositories.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  orga: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Repositories;