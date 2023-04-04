import React from 'react';

const FilterSize = ({ setSize, dogSize }) => {
  const handleSelectSize = () => setSize(dogSize);

  return (
    <>
      <button onClick={handleSelectSize}>{dogSize}</button>
    </>
  );
};

export default FilterSize;
