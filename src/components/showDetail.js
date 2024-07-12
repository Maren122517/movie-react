import React from 'react';

const ShowDetail = ({ show }) => {
  if (!show) {
    return <div>Select a show to see details</div>;
  }

  return (
    <div>
      <h2>{show.name}</h2>
      <img src={show.image ? show.image.original : ''} alt={show.name} />
      <p>{show.summary}</p>
      <p><strong>Genres:</strong> {show.genres.join(', ')}</p>
      <p><strong>Premiered:</strong> {show.premiered}</p>
      <p><strong>Rating:</strong> {show.rating.average}</p>
    </div>
  );
};

export default ShowDetail;

