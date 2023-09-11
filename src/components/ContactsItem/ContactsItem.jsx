import propTypes from 'prop-types';
import { ContactItem, ButtonDelete } from './ContactsItem.styled';

export const ContactsItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <>
      <ContactItem key={id}>
        {name}: {number}
        <ButtonDelete type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </ButtonDelete>
      </ContactItem>
    </>
  );
};

ContactsItem.propTypes = {
  id: propTypes.string,
  name: propTypes.string,
  number: propTypes.string,
  onDeleteContact: propTypes.func,
};
