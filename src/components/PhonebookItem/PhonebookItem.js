import s from './PhonebookItem.module.css';

export default function PhonebookItem({ id, name, number, onDeleteContact }) {
  return (
    <>
      {name}:{number}
      <button
        className={s.button}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </>
  );
}
