// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList() {
  const filterValue = useSelector((state) => state.filter.name);
  const contacts = useSelector((state) => state.contacts.items);

  // **************************
  // *** ПИТАННЯ ДО МЕНТОРА ***
  // **************************

  // Нижче я намагаюсь відаляти данні із сховища, якщо всі контакти видалені, для того,
  // щоб відпрацював початковий стан у store.
  // Тому що, коли я видаляю всі контакти на сайті - у сховищі залишається якась службова інфа від persist,
  // та не відпрацьовує початковий стан у store.
  // Підкажіть будь ласка чому інфа у сховищі повністью за ключем не видаляється?

  // useEffect(() => {
  //   const storage = JSON.parse(localStorage.getItem('persist:contacts'));
  //   if (storage && storage.items) {
  //     const items = JSON.parse(storage.items);
  //     if (Array.isArray(items) && items.length === 0) {
  //       localStorage.removeItem('persist:contacts');
  //     }
  //   }
  // }, []);

  const visibleContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filterValue.toLowerCase());
  });

  return (
    <ul className={css.contactList}>
      {visibleContacts.map((contact) => (
        <li key={contact.id} className={css.contactItem}>
          <Contact contactData={contact} />
        </li>
      ))}
    </ul>
  );
}
