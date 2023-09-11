import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import propTypes from 'prop-types';
import { ContactList } from './ContactList.styled';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactList>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactsItem
            key={id}
            name={name}
            number={number}
            onDeleteContact={() => onDeleteContact(id)}
          ></ContactsItem>
        );
      })}
    </ContactList>
  );
};

ContactsList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      name: propTypes.string,
      number: propTypes.string,
    })
  ),
  onDeleteContact: propTypes.func,
};
