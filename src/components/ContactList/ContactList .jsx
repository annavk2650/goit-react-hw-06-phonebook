import { ContactListItem } from '../ContactListItem/ContactListItem';
import { List } from './ContactList.styled';
import { getContacts } from 'redux/selector';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(getContacts);

  return (
    <List>
      {contacts.map(({ name, number, id }) => {
        return <ContactListItem key={id} id={id} name={name} number={number}></ContactListItem>;
      })}
    </List>
  );
};
