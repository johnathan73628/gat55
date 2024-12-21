// src/components/Loader.tsx
import React from 'react';

// Register the helix animation
import { helix } from 'ldrs';
helix.register();

const Loader: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-50">
      <l-helix size="100" speed="1.0" color="black"></l-helix>
    </div>
  );
};

export default Loader;
