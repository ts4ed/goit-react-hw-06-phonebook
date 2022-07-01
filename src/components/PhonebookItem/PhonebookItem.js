import s from './PhonebookItem.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contactsSlice';

export default function PhonebookItem({ id, name, number }) {
  const dispatch = useDispatch();
  return (
    <>
      {name}:{number}
      <button
        className={s.button}
        type="button"
        onClick={() => dispatch(deleteContacts(id))}
      >
        Delete
      </button>
    </>
  );
}

PhonebookItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
