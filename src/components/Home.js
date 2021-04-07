import React, { useState } from 'react';

export default function Home() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div className='active-card'></div>
    </div>
  );
}
