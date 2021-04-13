import './CardPreview.css';
import bitcoin from '../assets/img/bitcoin.svg';
import mastercard from '../assets/img/mastercard.svg';
import visa from '../assets/img/visa.svg';
import klarna from '../assets/img/klarna.svg';
import amex from '../assets/img/amex.svg';
import signals from '../assets/img/signals.png';

export function CardPreview({ card }) {
  return (
    <div className={`card-preview ${card.vendor}`}>
      <p className='card-vendor'>
        <img
          src={
            card.vendor === 'Bitcoin'
              ? bitcoin
              : card.vendor === 'MasterCard'
              ? mastercard
              : card.vendor === 'Visa'
              ? visa
              : card.vendor === 'Klarna'
              ? klarna
              : card.vendor === 'Amex'
              ? amex
              : null
          }
          alt=''
        />
      </p>
      <p className='card-chip'></p>
      <p className='card-signals'>
        <img src={signals} alt='' />
      </p>

      <p className='card-number'>{card.cardNumber}</p>
      <div>
        <p className='card-full-name'>
          Cardholder name
          <br />
          <strong>
            {card.cardFirstName} {card.cardLastName}
          </strong>
        </p>
        <p className='card-valid-through'>
          Valid Thru <br /> {card.validThrough}
        </p>
      </div>

      <p className='card-cvc'>CVC: {card.cvc}</p>
    </div>
  );
}
