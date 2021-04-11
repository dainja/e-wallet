import React, { useState } from 'react';
import { CardPreview } from './CardPreview';

export default function Home({ cards }) {
  const [isActive, setIsActive] = useState(false);

  const setActive = (e) => {
    console.log(e.target);
    console.log(cards);
  };
  return (
    <div>
      {cards.length > 0 && (
        <div className='cards-home'>
          <div className='active-card'>
            <CardPreview card={cards[0]} />
          </div>
          <div className='non-active-cards'>
            <div className='cards-wrapper'>
              {cards.slice(1, 5).map((_card, i) => {
                return (
                  <div className='card-item' onClick={setActive}>
                    <CardPreview card={_card} key={i} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
