import s from './Phonebook.module.css';
import PhonebookItem from 'components/PhonebookItem/PhonebookItem';
import { useSelector } from 'react-redux';
import { contactsFiltered, getContacts, getFilter } from 'redux/contactsSlice';

export default function Phonebook() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  return (
    <ul className={s.list}>
      {contactsFiltered(contacts, filter).map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <PhonebookItem name={name} number={number} id={id} />
        </li>
      ))}
    </ul>
  );
}
