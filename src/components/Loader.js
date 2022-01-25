import React from 'react';

function Loader() {
  return (
    <div class="d-flex justify-content-center loader">
    <div class="spinner-border" role="status"></div>
    <span class="sr-only">Loading...</span>
  </div>
  );
}

export default Loader;
