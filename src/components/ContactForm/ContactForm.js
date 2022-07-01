import s from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import {
  addContacts,
  getContacts,
  getName,
  getNumber,
  setWord,
  setNumber,
} from 'redux/contactsSlice';

export default function ContactForm() {
  const name = useSelector(getName);
  const number = useSelector(getNumber);

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    contacts.some(contact => contact.name === name)
      ? alert(`${name} is already in contacts`)
      : dispatch(
          addContacts({
            id: nanoid(),
            name: name,
            number: number,
          })
        );

    dispatch(setNumber(''));
    dispatch(setWord(''));
  };

  return (
    <div className={s.container}>
      <form type="submit" onSubmit={handleSubmit} className={s.form}>
        <label className={s.input}>
          <span className={s.span}>Name</span>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={e => dispatch(setWord(e.target.value))}
            value={name}
          />
        </label>
        <label className={s.input}>
          <span className={s.span}>Number</span>
          <input
            type="tel"
            name="number"
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={e => dispatch(setNumber(e.target.value))}
            value={number}
          />
        </label>

        <button className={s.button} type="submit" disabled={!name || !number}>
          Add contact
        </button>
      </form>
    </div>
  );
}
