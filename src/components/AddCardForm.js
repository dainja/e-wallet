import React from 'react';
import { CardPreview } from './CardPreview';

export function AddCardForm({ card, save, handleChange, vendors }) {
  return (
    <div className='add-card-container'>
      <h4>Add a new bank card</h4>
      <br />
      <CardPreview card={card}></CardPreview>
      <form onSubmit={save}>
        <div className='form-group'>
          <label htmlFor='vendor'>Card Type</label>
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
        <div className='form-group'>
          <label htmlFor='cardNumber'>Card Number</label>
          <input
            onChange={handleChange}
            value={card.cardNumber}
            className='form-control'
            name='cardNumber'
            id='cardNumber'
            placeholder='Card Number'
            minLength={19}
            required
          />
        </div>
        <div className='form-name-container d-flex'>
          <div className='form-group'>
            <label htmlFor='cardFirstName'>First Name</label>
            <input
              onChange={handleChange}
              value={card.cardFirstName}
              type='text'
              className='form-control'
              id='cardFirstName'
              name='cardFirstName'
              placeholder='First Name'
              minLength={2}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='cardLastName'>Last Name</label>
            <input
              onChange={handleChange}
              value={card.cardLastName}
              type='text'
              className='form-control'
              id='cardLastName'
              name='cardLastName'
              placeholder='Last Name'
              minLength={2}
              required
            />
          </div>
        </div>
        <div className='form-valid-cvc d-flex'>
          <div className='form-group'>
            <label htmlFor='validThrough'>Valid Through</label>
            <input
              onChange={handleChange}
              value={card.validThrough}
              className='form-control'
              id='validThrough'
              name='validThrough'
              placeholder='Valid Through'
              minLength={5}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='cvc'>CVC</label>
            <input
              onChange={handleChange}
              value={card.cvc}
              className='form-control'
              id='cvc'
              name='cvc'
              placeholder='CVC'
              required
            />
          </div>
        </div>

        <button type='submit' className='btn btn-success'>
          Submit
        </button>
      </form>
    </div>
  );
}
