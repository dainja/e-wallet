import './CardPreview.css';
import bitcoin from '../assets/img/bitcoin.svg';
import mastercard from '../assets/img/mastercard.svg';
import visa from '../assets/img/visa.svg';
import klarna from '../assets/img/klarna.svg';

export function CardPreview({ card }) {
  return (
    <div className='card-preview'>
      <p className='card-vendor'>
        <img src={card.vendor} alt='' />
      </p>

      <p className='card-number'>{card.cardNumber}</p>
      <div className=''>
        <p className='card-full-name'>
          Cardholder name
          <br />
          {card.cardFirstName} {card.cardLastName}
        </p>
        <p className='card-valid-through'>
          Valid Thru <br /> {card.validThrough}
        </p>
      </div>

      <p className='card-cvc'>{card.cvc}</p>
    </div>
  );
}
