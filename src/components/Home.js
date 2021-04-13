import React from 'react';
import { useDispatch } from 'react-redux';
import { removeCard, setActive } from '../actions';
import { CardPreview } from './CardPreview';

export default function Home({ cards }) {
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        {cards.length > 0 ? (
          <h5 className='active-card-title'>Active Card</h5>
        ) : (
          ''
        )}
      </div>
      {cards.length > 0 && (
        <div className='cards-home'>
          {cards.map((card, i) => {
            if (card.active) {
              return (
                <div className='active-card'>
                  <CardPreview key={i} card={card} />
                </div>
              );
            }
          })}

          <div className='non-active-cards'>
            <div className='cards-wrapper'>
              {cards.map((card, i) => {
                if (!card.active) {
                  return (
                    <div className='card-item'>
                      <CardPreview card={card} key={i} />
                      <div className='card-buttons'>
                        <button
                          className='btn btn-success'
                          onClick={() => dispatch(setActive(card))}>
                          Set Active Card
                        </button>
                        <button
                          className='btn btn-danger'
                          onClick={() => dispatch(removeCard(card))}>
                          Remove Card
                        </button>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
