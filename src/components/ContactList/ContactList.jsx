import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Contact from '../Contact/Contact';
import { resetState } from '../../redux/contactsSlice';
import css from './ContactList.module.css';

export default function ContactList() {
  const filterValue = useSelector((state) => state.filter.name);
  const contacts = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();

  console.log(Boolean(contacts));
  console.dir(contacts);

  useEffect(() => {
    if (!contacts.length) dispatch(resetState());
  }, []);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <ul className={css.contactList}>
      {contacts.length > 0 &&
        visibleContacts.map((contact) => (
          <li key={contact.id} className={css.contactItem}>
            <Contact contactData={contact} />
          </li>
        ))}
    </ul>
  );
}
