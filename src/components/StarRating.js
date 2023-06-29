import { useState } from 'react';
const containerStyle = {
  display: 'flex',
  gap: '16px',
  alignItems: 'center',
};

const starContainerStyle = {
  display: 'flex',
};

const textStyle = {
  lineHeight: '1',
  margin: '0',
};
export default function StarRating({ maxRating = 5 }) {
  const [rating, setRating] = useState(1);

  function handleRating(rating) {
    setRating(rating);
  }
  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => {
          return <span>x</span>;
        })}
      </div>

      <p style={textStyle}>{rating || ''}</p>
    </div>
  );
}
