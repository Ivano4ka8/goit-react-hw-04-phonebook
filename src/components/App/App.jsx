import { Component } from 'react';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { ContactsList } from 'components/ContactsList/ContactList';
import { FilterContacts } from 'components/FilterContacts/FilterContacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contact => {
    this.setState(prevState => {
      const isExist = prevState.contacts.find(
        ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
      );

      if (isExist) {
        alert(`${contact.name} is already in contacts.`);
        return;
      }

      return { contacts: [...prevState.contacts, contact] };
    });
  };

  filterChange = event => {
    return this.setState({
      filter: event.target.value,
    });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = todoId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== todoId),
    }));
  };

  render() {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();
    const filteredContactList = contacts.filter(el =>
      el.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <>
        <ContactsForm onSubmit={this.addContact} />
        <FilterContacts filterChange={this.filterChange} filter={filter} />
        <ContactsList
          contacts={filteredContactList}
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}
