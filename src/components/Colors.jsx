import React from 'react';

const Colors = ({ primary, secondary }) => {
  return (
    <div className="colors">
      {secondary ? (
        <>
          <h3>Colors</h3>
          <p>
            {primary} & {secondary}
          </p>
        </>
      ) : (
        <>
          <h3>Color</h3>
          <p>{primary}</p>
        </>
      )}
    </div>
  );
};

export default Colors;
