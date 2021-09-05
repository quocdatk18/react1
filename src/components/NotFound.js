import React from 'react';
import NotFoundImage from '../assets/images/NotFound.jpg';

function NotFound() {
  return (
    <div>
      <img src={NotFoundImage} alt="photo" style={{ width: '100%' }} />
    </div>
  )
}

export default NotFound;
