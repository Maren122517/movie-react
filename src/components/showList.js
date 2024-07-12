import React from 'react';

const ShowList = ({ shows, onShowSelect }) => {
  return (
    <div>
      {shows.map(show => (
        <div key={show.id} onClick={() => onShowSelect(show)}>
          <h3>{show.name}</h3>
          <img src={show.image ? show.image.medium : ''} alt={show.name} />
        </div>
      ))}
    </div>
  );
};

export default ShowList;

