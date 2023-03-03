import PropTypes from 'prop-types';
import { ItemCont, BtnContItem } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/formSlice';

export const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <ItemCont id={id}>
      {name}: {number}
      <BtnContItem type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </BtnContItem>
    </ItemCont>
  );
};

ContactListItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
