import './CardPreview.css';
import bitcoin from '../assets/img/bitcoin.svg';
import mastercard from '../assets/img/mastercard.svg';
import visa from '../assets/img/visa.svg';
import klarna from '../assets/img/klarna.svg';
import amex from '../assets/img/amex.svg';
import signals from '../assets/img/signals.png';

export function CardPreview({ card }) {
  const whichVendor = () => {
    if (card.vendor === 'Bitcoin') {
      console.log(card.vendor);
      return <img src={bitcoin} alt='' />;
    }
    if (card.vendor === 'MasterCard') {
      return <img src={mastercard} alt='' />;
    }
    if (card.vendor === 'Visa') {
      return <img src={visa} alt='' />;
    }
    if (card.vendor === 'Klarna') {
      return <img src={klarna} alt='' />;
    }
    if (card.vendor === 'Amex') {
      return <img src={amex} alt='' />;
    }
  };

  return (
    <div className={`card-preview ${card.vendor}`}>
      <p className='card-vendor'>{whichVendor()}</p>
      <p className='card-chip'></p>
      <p className='card-signals'>
        <img src={signals} alt='' />
      </p>

      <p className='card-number'>{card.cardNumber}</p>
      <div className=''>
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

      <p className='card-cvc'>{card.cvc}</p>
    </div>
  );
}
