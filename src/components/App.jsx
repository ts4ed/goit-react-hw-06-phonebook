import { useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Phonebook from './Phonebook/Phonebook';
import Filter from './Filter/Filter';
import useLocalStorage from 'hooks/useLocalStorage';
import s from './App.module.css';

export default function App() {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  // );
  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const addContact = data => {
    if (contacts.find(contact => contact.name === data.name)) {
      return alert(`${data.name} уже есть в контактах`);
    }
    setContacts(prevContacts => [data, ...prevContacts]);
  };
  const changeFilter = e => setFilter(e.currentTarget.value);

  const onDeleteContact = idContact => {
    setContacts(contacts.filter(contact => contact.id !== idContact));
  };

  const getVisibleContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm onSubmitData={addContact} />
      <h2 className={s.title}>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <Phonebook
        contacts={getVisibleContact()}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
}
