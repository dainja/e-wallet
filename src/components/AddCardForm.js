import React from 'react';
import { CardPreview } from './CardPreview';

export function AddCardForm({ card, save, handleChange, vendors }) {
  return (
    <div>
      <h4>Add a new bank card</h4>
      <br />
      <h6>New card</h6>
      <CardPreview card={card}></CardPreview>
      <form onSubmit={save}>
        <div className='form-group'>
          <label htmlFor='cardNumber'>number</label>
          <input
            onChange={handleChange}
            value={card.cardNumber}
            className='form-control'
            name='cardNumber'
            id='cardNumber'
            placeholder='cardnumber'
            minLength={19}
            required
          />
        </div>
        <div className='form-name-container d-flex'>
          <div className='form-group'>
            <label htmlFor='cardFirstName'>first name</label>
            <input
              onChange={handleChange}
              value={card.cardFirstName}
              type='text'
              className='form-control'
              id='cardFirstName'
              name='cardFirstName'
              placeholder='first name'
              minLength={2}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='cardLastName'>last name</label>
            <input
              onChange={handleChange}
              value={card.cardLastName}
              type='text'
              className='form-control'
              id='cardLastName'
              name='cardLastName'
              placeholder='last name'
              minLength={2}
              required
            />
          </div>
        </div>
        <div className='d-flex'>
          <div className='form-group'>
            <label htmlFor='validThrough'>valid through</label>
            <input
              onChange={handleChange}
              value={card.validThrough}
              className='form-control'
              id='validThrough'
              name='validThrough'
              placeholder='valid through'
              minLength={5}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='cvc'>cvc</label>
            <input
              onChange={handleChange}
              value={card.cvc}
              className='form-control'
              id='cvc'
              name='cvc'
              placeholder='cvc'
              required
            />
          </div>
        </div>

        <div className='form-group'>
          <label htmlFor='vendor'>card type</label>
          <select
            onChange={handleChange}
            value={card.vendor}
            name='vendor'
            className='form-control'
            id='vendor'
            required>
            {vendors.map((vendor) => {
              return <option key={vendor}>{vendor}</option>;
            })}
          </select>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
