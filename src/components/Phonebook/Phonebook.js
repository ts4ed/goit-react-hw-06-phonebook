import PropTypes from 'prop-types';
import s from './Phonebook.module.css';
import PhonebookItem from 'components/PhonebookItem/PhonebookItem';

export default function Phonebook({ contacts, onDeleteContact }) {
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <PhonebookItem
            name={name}
            number={number}
            onDeleteContact={() => onDeleteContact(id)}
          />
        </li>
      ))}
    </ul>
  );
}

Phonebook.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func.isRequired,
};
