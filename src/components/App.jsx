import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList ';
import { Filter } from './Filter/Filter';
import { Container } from './App.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selector';

export default function App() {
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {contacts.length > 0 ? <ContactList /> : <p>Your phonebook is empty. Please add contact.</p>}
    </Container>
  );
}
