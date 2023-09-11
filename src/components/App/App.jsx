import { useEffect, useState } from 'react';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { ContactsList } from 'components/ContactsList/ContactList';
import { FilterContacts } from 'components/FilterContacts/FilterContacts';
import { SectionComponent } from 'components/Section/Section';

const contactsReading = () => {
  const prevContacts = localStorage.getItem('contacts');

  if (prevContacts !== null) {
    return JSON.parse(prevContacts);
  }

  return [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
};

export const App = () => {
  const [contacts, setContacts] = useState(contactsReading);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    return localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contact => {
    const isExist = contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isExist) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }
    setContacts(prevContacts => {
      return [...prevContacts, contact];
    });
  };

  const filterChange = event => {
    return setFilter(event.target.value);
  };

  const deleteContact = todoId => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== todoId);
    });
  };

  const normalizedFilter = filter.toLowerCase();
  const filteredContactList = contacts.filter(el =>
    el.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <>
      <SectionComponent title="Add contact">
        <ContactsForm onSubmit={addContact} />
      </SectionComponent>
      <SectionComponent title="Filter contacts">
        <FilterContacts filterChange={filterChange} filter={filter} />
      </SectionComponent>
      <SectionComponent title="Your Phonebook">
        <ContactsList
          contacts={filteredContactList}
          onDeleteContact={deleteContact}
        />
      </SectionComponent>
    </>
  );
};
