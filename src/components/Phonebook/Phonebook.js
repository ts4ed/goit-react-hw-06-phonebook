import s from './Phonebook.module.css';
import PhonebookItem from 'components/PhonebookItem/PhonebookItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/contactsSlice';

export default function Phonebook() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const contactsFiltered = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul className={s.list}>
      {contactsFiltered.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <PhonebookItem name={name} number={number} id={id} />
        </li>
      ))}
    </ul>
  );
}
