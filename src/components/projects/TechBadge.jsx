import React from 'react';

const TechBadge = ({ technology }) => {
  return (
    <span className="inline-block px-3 py-1 text-sm font-medium bg-gray-900/80 text-blue-400 rounded-full border border-blue-500/20">
      {technology}
    </span>
  );
};

export default TechBadge; 