export function AddCardForm({ card, save, handleChange, vendors }) {
  return (
    <form onSubmit={save}>
      <div className='form-group'>
        <label htmlFor='cardNumber'>number</label>
        <input
          onChange={handleChange}
          value={card.cardNumber}
          type='number'
          className='form-control'
          name='cardNumber'
          id='cardNumber'
          placeholder='cardnumber'
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
          />
        </div>
      </div>
      <div className='d-flex'>
        <div className='form-group'>
          <label htmlFor='validThrough'>valid through</label>
          <input
            onChange={handleChange}
            value={card.validThrough}
            type='number'
            className='form-control'
            id='validThrough'
            name='validThrough'
            placeholder='valid through'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='cvc'>cvc</label>
          <input
            onChange={handleChange}
            value={card.cvc}
            type='number'
            className='form-control'
            id='cvc'
            name='cvc'
            placeholder='cvc'
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
          id='vendor'>
          {vendors.map((vendor) => {
            return <option key={vendor}>{vendor}</option>;
          })}
        </select>
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
}
