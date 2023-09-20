import { useState } from 'react';
import { nanoid } from 'nanoid';
import propTypes from 'prop-types';
import {
  Form,
  FormLabel,
  FormInput,
  ButtonSubmit,
} from './ContactsForm.styled';


export const ContactsForm = ({ onSubmit }) => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.log('erorr');
    }
  };

  const onFormSubmit = event => {
    event.preventDefault();

    onSubmit({
      id: nanoid(),
      name,
      number,
    });

    reset();
  };

  const reset = () => {
    setNumber('');
    setName('');
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <FormLabel>
        Name
        <FormInput
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </FormLabel>
      <FormLabel>
        Phone
        <FormInput
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </FormLabel>
      <ButtonSubmit type="submit">Add contact</ButtonSubmit>
    </Form>
  );
};
ContactsForm.propTypes = {
  onFormSubmit: propTypes.func,
};
